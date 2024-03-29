---
Title: どうしてActivityPub鯖の爆破に410が必要なのか
Category:
- プログラム
Date: 2023-07-20T11:30:00+09:00
IMAGE: /img/2023/07/20/thumbnail.jpg
---

MastodonやMisskeyなどのActivityPubに住んでいると、人が増えて盛況になっていくサーバーもある一方、おひとり鯖や少人数鯖を閉じるという話も聞こえてきます。

その際に、 **「ActivityPubに繋がっているサーバーは410を返して閉じようね」** という話も同時に流れてきます。

今回はなぜサーバーを閉じるときに、410を返すように設定することが推奨されるのか、という話をします。

![サムネイル](/img/2023/07/20/thumbnail.jpg)

どうやって410を返せばいいのかは、以下の記事で解説されているのでそちらをご覧ください。

- [https://zenn.dev/cybergene/articles/6cae8d68bdd1dc4209cd](https://zenn.dev/cybergene/articles/6cae8d68bdd1dc4209cd)
- [https://snap.hyuki.net/20180609220309/](https://snap.hyuki.net/20180609220309/)

### 410ってなに

まずは「410」とは何か。HTTPのプロトコルに記載されているGone（消滅）を示すHTTPステータスコードになります。

ページが見つかりませんでしたの404エラーや、サーバーに大量のアクセスが来たときの503エラーは見たことあるかと思います。それらと同じようなものです。

この410は、 **もうこのサーバーは閉じてしまいました。もう二度と復活することありません。** ということを示します。

他のWebサービスを閉じるときにも410エラーを返すように設定したほうが本当は好ましいのでしょうが、ActivityPubのサーバーほど強く言われません。強いて言うならGoogleのインデックスからの削除を早くしたいときくらい。


### 410を出さずに鯖爆破するとどうなるか

ではなぜ、ActivityPub鯖では410を返すべきと言われるのでしょうか。410を出さずに鯖爆破するとどうなるかを見ていきましょう。

はじめにおひとりさま鯖を立てました。おめでとうございます。そして、投稿をしつつ他のサーバーの人をフォローしたり、他のサーバーの人からフォローを受けたりします。Fediverse生活を満喫しました。しばらくした後、やっぱりこのサーバーを閉じようとなりました。

で、410を出さずにサーバーを閉じ、そのまま放置するとどうなるか。

サーバーを閉じたあと、自分がフォローしていた人が新しく投稿をしました。
ActivityPubは自分が投稿をしたのと同時に、自分のフォロワーに対してその投稿を配達するという形式なので、こちらのサーバーが閉じているとはつゆ知らず、その投稿を届けに来てくれます。

さて、投稿を届けに来ました。しかしながらサーバーがなくなっているので届けることが出来ませんでした。
そのうえ届けに来た人にとっては、サーバーがたまたまメンテナンスで止まっているのか、処理が追いつかなくて受け取りができなかっただけなのか、の判断ができません。

そのため、投稿の配達に失敗した場合はしばらくしてからあらためて再度配送しようとします。配送を再度行うまでの間隔であったり配送をやめるまでの回数であったりはどのプラットフォームを使っているかによるのですが、いずれにしても届かない場合に複数回配送しようとするわけです。フォロー先のサーバーに多少なりとも負荷を与えてしまうわけですね。

では、サーバーを閉じたときに410を出すような設定をしておいた世界線だとどうなるか。

1回目の配達で届けに来た人が「このサーバーは閉じてしまいましたよ（410）」という看板を確認します。すると「ここにはもう配達をしなくていいんだ」と配達員さんにもわかるわけです。

届けに来る人の負担を減らす。これがActivityPub鯖を閉じるときに410を出しておきましょうねと言われる理由です。


### フォローを全部外して鯖爆破すればいいのでは

じゃあ自分が誰もフォローしてなければ410を出す必要がないんじゃないか。そう思うかもしれませんが、配達されるメッセージはフォローした人の投稿だけではありません。

過去自分がブートした投稿やお気に入りした投稿に変更や削除があったときにも配達が来ます。またフォローをしてくれていた人がフォローを外したときにも連絡が来ます。

また、フォロー・フォロワーゼロ、お気に入りなどもゼロ、といった場合でも配送は来ます。

Mastodonではユーザーが退会処理をしたときに、関わったことのある全てのサーバーに対して「このユーザーが消えたよ」ということを伝達しに行く仕様となっています。

なので、他のサーバーからフォローできるか試しただけでも、以後そのサーバーからユーザーの削除通知が配送されることになるわけです。

おそらくサーバーを閉じる段階でどのサーバーからどのような配達が来ているのかを把握していることは少ないかと思います。

410さえ出しておけば、どの種類の配達であったとしても届けに来た人は諦めて帰ってくれます。とりあえず410を出して置けばきれいにサーバーを閉じられます。



### 410を出さない鯖は他の鯖にどれくらい負荷をかけるの？

では、410を出さないサーバーがひとつでもあれば他のサーバーが落ちるのかというとそういうわけでもなく。配送自体は投稿をするたびに行われますし、他サーバーがメンテナンスだから自分のところが重たくなったみたいな話は聞いたことないと思います。

しかしながら、たくさんのサーバーが410を出さずに消えてしまうと、他サーバーへ届けに行く配達員さんのリソースを徐々に圧迫していくことになります。

リレーサーバーに加わっている場合は、たくさんのサーバーに投稿を届けに行かないといけない普段から忙しい配達員さんに無駄に再配達をさせることになります。

410を出さないととても大きな影響がある、というものではないですが、なるべくしておいたほうが印象はいいよね。といった感じです。

逆に、現在鯖缶をしているのであれば、配送が出来なくなっているサーバーがないか設定画面を見ておきましょう。

Mastodonの場合、設定画面の「モデレーション」>「既知のサーバー」に配送が失敗したサーバー、配送不可なサーバーが表示されます。定期的に見てメンテナンスしておくとキューの流れがスムーズになるかもしれません。

### まとめ

というわけで、サーバーを爆破する際に410を出しておこうと言われるのはなぜなのかを簡単に書いてみました。

ちなみにもし同じドメインで再度サーバーを立てたときに、過去410を出してサーバーを閉じていると他サーバーから見つけてもらえない可能性はありますので、その点はお気を付けください。

何かしらの参考になれば幸いです。
