---
Title: ブログをはてなブログからNext.jsで作ったブログに移行した話
Category:
- プログラム
Date: 2022-09-04T23:10:31
IMAGE: /img/2022/09/04/thumbnail.png
---

ふと思い立ち、ブログをNext.jsで作って、記事をこっちに移動してきたよという話。

いわゆるJamstackなブログというやつですね。この記事は作るにあたってやったことと参考になった記事のメモ。

リポジトリはここ → [https://github.com/alfe/blog](https://github.com/alfe/blog)

### 移行手順

#### ブログをつくる

まずはMarkdownのファイルを入れるとブログっぽい表示になるWebサイトを作ります。以下のサイトをほぼコピペで投稿一覧ページと投稿詳細ページができました。助かる。

[Next.js を使った Jamstack なブログの始め方 | gotohayato.com](https://gotohayato.com/content/517/)

#### はてなブログ記事のエクスポート

こちらは [x-motemen/blogsync](https://github.com/x-motemen/blogsync) を使って記事のダウンロード。

「見たまま」編集で記事を描いていたため、出力される記事はHTMLになっていました。なので、投稿詳細ページをHTMLとマークダウンが混じっていても上手く表示できるように [remark](https://github.com/remarkjs/remark)のプラグインやらを変更。

#### OGPをつける

これはこんな感じで。Next.jsは気軽に&lt;head&gt;へ要素を突っ込めるので良い。

```jsx
import React from "react"
import Head from "next/head"

const Ogp = (props) => {
  const siteTitle = "FUN YOU BLOG"
  return (
    <Head>
      <meta property="og:url" content={`https://blog.alfebelow.com/entry${props.slug}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="ja" />
      <meta property="og:image" content={props.thumbnail} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@alfe_below" />
    </Head>
  )
}
export default Ogp
```

#### サムネをつける

Markdownファイルのタイトルとか入れるところに `IMAGE` 欄を用意した。この記事だと以下みたいになる。

```
---
Title: ブログをはてなブログからNext.jsで作ったブログに移行した話
Category:
- プログラム
Date: 2022-09-04T23:10:31
IMAGE: /img/2022/09/04/thumbnail.png
---
```

IMAGEに入れたものは記事一覧のサムネとOGP画像になる。


#### 記事フッター

前の記事と次の記事へ飛べるようにしてる。

![image](/img/2022/09/04/entry-footer.jpg)


#### フッター

カテゴリー、年別アーカイブ、プロフィールとかを入れた。年別アーカイブでなく月ごとのリンクにしたりとか、各カテゴリーの記事数とか出したりとかしたい。

が、めんどいのであとまわし。

![image](/img/2022/09/04/footer.jpg)

#### スマホ対応

これはお気持ち程度に。また気が向いたらちゃんとやる。

#### RSS

ちゃんと[feedのxml](/feed.xml)も作ってる。下の記事を参考にした。

ただ、このブログはSSGでなくSSRにしてるので、RSSの生成部分は別途切り出して手動でたたいて出す感じにした。のちのちCIに組み込みたい。

[Next.js に feed を導入して RSS と Atom のフィードを生成しよう | fwywd（フュード）powered by キカガク](https://fwywd.com/tech/next-feed-rss-atom)

#### デプロイ to Netlify

いつものように `netlify init` をした。

せっかくなので、 [Vercel](https://vercel.com/) でホスティングしても良いかもと検討はしてみた。が、Googleアドセンスがダメって話とホスティング先を分散するとどこになに置いたか忘れて大変になるという過去の経験から今回も [Netlify](https://www.netlify.com/) で、という話になった。

### 移行してよかったこと

- 画面が好き勝手いじれるようになる。特にheadや細かいボタン回り。
- ボタンをコンポーネントとして扱えるのでデザイン周りの変更が楽そう。
- VSCodeで文字書いてそのままpushできる。あとあとtextlintとかもいれたい。
- ブログ記事の追加がGitHubへの1コミットになる。

### 移行したデメリット

- 細かいところも自分で実装する必要ができた
- 外部サイトへのリンクとか
- Amazonの商品ページのリンクとか
- カテゴリーや過去記事なんかもそう

この辺のデメリットを美味いことやってくれるのがブログサービスだったんだなと、作ってみてあらためて感じた。

HugoやGatsbyなんかをつかえば多少楽になるだろうけれども、細かい調整をできなさそうな気がしてNextにしてる。

### まとめ

しばらくはこのスタイルでやってみますので、なにとぞ。
