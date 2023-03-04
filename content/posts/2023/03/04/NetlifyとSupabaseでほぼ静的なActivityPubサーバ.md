---
Title: NetlifyとSupabaseでほぼ静的なActivityPubサーバ
Category:
- 本
Date: 2023-03-04T19:00:00+09:00
IMAGE: /img/2023/03/04/thumbnail.jpg
---

NetlifyとSupabaseで、静的ファイルをメインにしたActivityPubサーバを作ってフォロワーに投稿を届けるお話。いまのところ無料利用枠内。

「@alfe@ap.alfebelow.com」でフォローができるよ。

![image](/img/2023/03/04/thumbnail.jpg)

ちかごろActivityPubやFediverseの話が盛んになってきています。

Twitterがあやしい感じになってきたので分散型SNSにいこう！や、あっちのSNSはスタンプがたくさんで楽しいぞ！などがTwitterにも流れていますね。

そんな私もここしばらくTwitterよりもMastodonを見ることが増えてきていたりします。

で、MastodonとかMisskeyとかを見てると気になってくるのが、連合と呼ばれる投稿のやり取り。
どうも有名どころのMastodon以外にもActivityPubのサーバを立てるプログラムは多数存在している様子。

そもそもActivityPubって何なのか調べてみよう、余裕があればサーバを立ててみよう、という気になってきました。


## ActivityPubとは
調べてみるまで知らなかったんですが、ActivityPubってW3C勧告として文書が出ているんですよね。

[ActivityPub - W3C (https://www.w3.org/TR/activitypub/)](https://www.w3.org/TR/activitypub/)

てっきり草の根プロトコルだと思い込んでたのでびっくり。勧告として出ているなら有名ライブラリがメンテされなくなっても互換のあるものがわんさか出てくるだろう、という安心感があります。

ちなみに、Mastodonだと開発当時からActivityPubというわけではなく、もともとはOStatusという通信プロトコルが使われていた様子。いまでも外部通信するときにその名残がある様子。

## サーバ構成
で、W3Cの勧告を読んでいると「実は大部分を静的ファイルで置き換えができたりしない？」と思えてきました。

Mastodonサーバを立てよう、といったときにVPSを借りるたりラズパイを用意したり、みたいなのが必要っぽいんですよね。ただおひとりさまでActivityPub鯖を立てるときにそこまでスペックが必要な構成を要求されているわけでもなさそうだなというのをドキュメントを見て感じました。

というわけで、今回のサーバ構成はNetlifyをメインに。フォローの処理をする関係でどうしてもDBが必要になるのでSupabaseを接続しています。

おそらくRDBの必要はなくてNoSQLでもよさそう。なのですが、さくっと使えて無料枠のあるNoSQLってFirebaseくらいしかないっぽい。

データの通信量に課金するFirebaseと、保存したデータサイズに課金するSupabase。それならSupabaseのほうがActivityPub向きでは？となったのでSupabaseを選んでいます。

![サーバ構成の図](/img/2023/03/04/architecture.jpg)

## URL一覧
で、この構成で用意しているURLが以下の通り。

- [https://ap.alfebelow.com/api/inbox](https://ap.alfebelow.com/api/inbox)
- [https://ap.alfebelow.com/.well-known/webfinger](https://ap.alfebelow.com/.well-known/webfinger)
- [https://ap.alfebelow.com/u/alfe](https://ap.alfebelow.com/u/alfe)
- [https://ap.alfebelow.com/u/alfe/following](https://ap.alfebelow.com/u/alfe/following)
- [https://ap.alfebelow.com/u/alfe/followers](https://ap.alfebelow.com/u/alfe/followers)
- [https://ap.alfebelow.com/api/outbox](https://ap.alfebelow.com/api/outbox)
- [https://ap.alfebelow.com/api/outbox_1](https://ap.alfebelow.com/api/outbox_1)（投稿の過去ログ）
- [https://ap.alfebelow.com/note/20230221085500](https://ap.alfebelow.com/note/20230221085500)（投稿1）
- [https://ap.alfebelow.com/note/20230221130700](https://ap.alfebelow.com/note/20230221130700)（投稿2）
- [https://ap.alfebelow.com/note/20230228110000](https://ap.alfebelow.com/note/20230228110000)（投稿3）
- [https://ap.alfebelow.com/icon.jpg](https://ap.alfebelow.com/icon.jpg)（プロフィールアイコン）
- [https://ap.alfebelow.com/favicon.ico](https://ap.alfebelow.com/favicon.ico)（favicon）

これらURLの内、動的な処理が必須なのは一番上のinboxのみ。

その他はJSONやXMLで返すので静的ファイルを配置しても機能します。

おそらく世のActivityPub系アプリは、静的に振り分けたURLの一部を動的に処理をしていくものが多いと思いますが、おひとりさまならJSON形式で書いたファイルを直置きで十分。

ただ、投稿をするたびに投稿用のJSONファイルを用意して、過去ログを追加して、ってやるのが大変。あと、followersのフォロワー数のアップデートもJSONファイルを書き換えないといけない。

そういった面倒を踏まえれば、配置したのが静的ファイルでも他のサーバからは関係なかったりします。

## 他のActivityサーバが自鯖を見つける流れ

これらのURLを用意したときにどんな流れで他のActivityサーバとつながるのか見てみましょう。

Mastodonサーバの左上にある検索やMisskeyサーバの検索に `@alfe@ap.alfebelow.com` と打ち込んでみます。

すると、打ち込んだサーバから `https://ap.alfebelow.com/.well-known/webfinger?resource=acct%3A%40alfe%40ap.alfebelow.com` へGETリクエストが投げられます。

クエリパラメータとして`acct:@alfe@ap.alfebelow.com`をつけています。ユーザ名を識別する場合はここ見て処理が必要になりそうですが、今回1ユーザなので特に処理せずに `alfe` 宛のJSONを返しています。

JSONの中身がこんな感じ。
```
{  
  "subject": "acct:alfe@ap.alfebelow.com",  
  "links": [  
    {  
      "rel": "self",  
      "type": "application/activity+json",  
      "href": "https://ap.alfebelow.com/u/alfe"  
    }  
  ]  
}
```
ユーザのURLが`links.href`に書いてます。ここを参照して `https://ap.alfebelow.com/u/alfe` に再びGETリクエストを投げるとユーザのプロフィール情報が返ってきます。

```
{
    "@context": [
        "https://www.w3.org/ns/activitystreams",
        "https://w3id.org/security/v1"
    ],
    "id": "https://ap.alfebelow.com/u/alfe",
    "type": "Person",
    "following": "https://ap.alfebelow.com/u/alfe/following",
    "followers": "https://ap.alfebelow.com/u/alfe/followers",
    "inbox": "https://ap.alfebelow.com/api/inbox",
    "outbox": "https://ap.alfebelow.com/api/outbox",
    "name": "alfe",
    "preferredUsername": "alfe",
    "summary": "https://alfebelow.com/",
    "url": "https://alfebelow.com/",
    "icon": {
        "type": "Image",
        "mediaType": "image/jpeg",
        "url": "https://ap.alfebelow.com/icon.jpg"
    },
    "manuallyApprovesFollowers": true,
    "discoverable": true,
    "publicKey": {
        "id": "https://ap.alfebelow.com/u/alfe#main-key",
        "owner": "https://ap.alfebelow.com/u/alfe",
        "publicKeyPem": "-----BEGIN PUBLIC KEY-----\nXXXXXXX\n-----END PUBLIC KEY-----"
    },
    "published": "2020-01-01T00:00:00.000Z"
}
```

先ほど並べたURLの一部がありますね。

このJSONファイルの内容や、ここに書いてるURLへさらにGETリクエストを投げてフォロー・フォロワー数を取ってきてプロフィール画面に埋め込んでいるようです。

で。

プロフィール画面を見てフォローをしようとなったときに、動的な処理を求められるinboxが必要になりきます。

## フォローしたときの処理

ActivityPubサーバから他のActivityPubサーバのユーザをフォローするとき、以下のような手順をとります。

1. (A鯖) Followリクエストを書いて、B鯖にinboxのURLにPOSTで送る
1. (B鯖) A鯖からのFollowリクエストに受け取ったと返す(200) 
1. (B鯖) Followリクエストに書かれているユーザ名をDBに保存する
1. (B鯖) 別途、A鯖にAcceptと書いたPOSTを投げる  

フォロー承認の有無にかかわらず、このような手順になっています。

実際にPOSTで届くFollowリクエストの例は以下。
```
{
    "@context": "https://www.w3.org/ns/activitystreams",
    "id": "https://example.com/00000000-0000-0000-0000-000000000000",
    "type": "Follow",
    "actor": "https://example.com/users/user1",
    "object": "https://ap.alfebelow.com/u/alfe"
}
```
`"type": "Follow"` と書いてFollowリクエストであるということを示しています。
`actor` がA鯖のフォローしたいと思っている人、`object` がB鯖のフォローされる人のユーザのURLを指しています。

B鯖はこれに対して200のレスポンスを返し、ユーザ（actor）をFollowerとしてDBに保存します。

そしてB鯖はA鯖に対してAcceptと書いたPOSTを投げます。（Headersにsignatureが必要）
``` 
{
    "@context": "https://www.w3.org/ns/activitystreams",
    "type": "Accept",
    "actor": "https://example.com/users/user1",
    "object": {
        "id": "https://example.com/00000000-0000-0000-0000-000000000000",
        "type": "Follow",
        "actor": "https://example.com/users/user1",
        "object": "https://ap.alfebelow.com/u/alfe"
    }
}
```

このようにPostリクエストのやり取りをするので、inbox受け取ったリクエストに対して動的な処理をさせる機構が必要になります。

今回はNetlifyにデプロイをしているので、inboxのURLに届いたPostリクエストをNetlify Functionで処理しています。

inboxで受け取るものはフォローだけではなく他にも以下のようなtypeが存在します。

- Follow
- Accept
- Reject
- Undo
- Remove
- Create
- Delete

Follow以外は200を返して後は内側で処理すればOKですが、Followに関してだけ別途Acceptを返す必要があるので注意しましょう。

これらのPOSTをinboxで受け取り、200を返す機構をつくれば、ひとまず他のサーバからフォローをできるActivityPubサーバが成立します。
あとは受け取ったtypeに合わせて内々に処理しておきましょう。


## 投稿時の処理
他のサーバからフォローをしてもらいました。フォロワーに対して投稿を届けに行きましょう。

W3Cのドキュメントにはoutboxに投稿が保存されたと同時に他のサーバへ投稿を届けに行きましょう、と書かれています。

つまり、投稿をトリガーとして配布するわけですが、ひとまず静的ファイルとして投稿を保存したのち、手動でトリガーを叩いてみましょう。

投稿として保存するJSONは以下。
```
{
    "@context": "https://www.w3.org/ns/activitystreams",
    "type": "Note",
    "id": "https://ap.alfebelow.com/u/alfe/statuses/20230221085500",
    "summary": null,
    "inReplyTo": null,
    "published": "2023-02-21T08:55:00Z",
    "attributedTo": "https://ap.alfebelow.com/u/alfe",
    "content": "<p>post test</p>",
    "to": [
        "https://www.w3.org/ns/activitystreams#Public"
    ],
    "cc": [
        "https://ap.alfebelow.com/u/alfe/followers"
    ],
    "sensitive": false,
    "attachment": [],
    "tag": []
}
```

こちらのJSONを用意した後、`id`に書いたURLでアクセスできるようにします。

それからフォロワーのサーバのInboxに対してCreateのPostリクエストを送ります。
```
{
    "@context": "https://www.w3.org/ns/activitystreams",
    "type": "Create",
    "object": {
        "@context": "https://www.w3.org/ns/activitystreams",
        "type": "Note",
        "id": "https://ap.alfebelow.com/u/alfe/statuses/20230221085500",
        "summary": null,
        "inReplyTo": null,
        "published": "2023-02-21T08:55:00Z",
        "attributedTo": "https://ap.alfebelow.com/u/alfe",
        "content": "<p>post test</p>",
        "to": [
            "https://www.w3.org/ns/activitystreams#Public"
        ],
        "cc": [
            "https://ap.alfebelow.com/u/alfe/followers"
        ],
        "sensitive": false,
        "attachment": [],
        "tag": []
    }
}
```
`object`の中身は投稿のJSONと同じもの。このJSONをsignitureをつけてフォロワーのサーバのinboxに送ることで、フォロワーのホームタイムラインにこの投稿が反映されます。

ActivityPubはフォロワーに対してアクティブに投稿を送る必要があるので、こちらでフォロワーの一覧情報を持っていないといけません。なので何かしらのデータベース(今回はSupabase)に接続する必要があるわけですね。

フォロワーのinboxのURLは、ユーザのプロフィール（Follow時に受け取ったJSONのactorに書かれているURL）のJSONに書かれています。そのURLに対してCreateのPOSTリクエストを送りましょう。

## まとめ
これでNetlifyとSupabaseを使った、inboxと投稿以外は静的ファイルで構築されたActivityPubサーバが構築されました。

投稿時にJSONを設置して手動でトリガーを発火させる必要はありますが、外から見たら普通にフォローができて投稿が届くサーバに見えるかと思います。

もちろんこれをメインサーバとするのは難しいですが、ブログのRSS代わりであったり、月一投稿の宣伝鯖としては使えるんじゃないかなと思っています。

静的ファイルなのでメンテの必要が薄く、NetlifyとSupabaseベースなので規模が大きくならない限り、料金はかからないのも嬉しいところ。

何かしらの参考になれば幸いです。

## 参考URL
- [https://macwright.com/2022/12/09/activitypub.html](https://macwright.com/2022/12/09/activitypub.html)
- [https://gitlab.com/shrmpy/hello-activitypub](https://gitlab.com/shrmpy/hello-activitypub)
- [https://qiita.com/wakin/items/94a0ff3f32f842b18a25](https://qiita.com/wakin/items/94a0ff3f32f842b18a25)
- [https://qiita.com/zunda/items/c4d668a75712d88e005c](https://qiita.com/zunda/items/c4d668a75712d88e005c)
