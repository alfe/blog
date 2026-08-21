# 2記事との `<head>` 比較レポート

- 調査日: 2026-08-21
- 比較記事A: [私の HTML 定型部分 2026年](https://blog.w0s.jp/entry/792)（富永日記帳、2026-08-20公開）
- 比較記事B: [My HTML boilerplate in 2026](https://www.matuzo.at/blog/2026/html-boilerplate)（Manuel Matuzović、2026-08-17公開）
- 対象リポジトリ: FUN YOU BLOG

## 結論

このリポジトリの `<head>` は、文字コード、viewport、ページタイトル、フィード、ファビコン、OGP、Twitter Card、非同期・遅延スクリプトという基本要素を備えている。

2記事との比較から修正価値が高いと判断した次の6点は、2026-08-21にすべて反映した。

1. 記事の `og:url` を年月日入りの公開URLに修正した。
2. OGP / Twitter Cardの画像タグをサムネイルがある場合だけ出力するようにした。
3. 記事ページを `og:type="article"` に修正した。
4. 通常のページ説明を `name="description"` に修正した。
5. `BlogPosting` JSON-LDと `article:published_time` を追加した。
6. 全ページに自己参照 `rel="canonical"` を追加し、`og:url` と同じURL生成処理を共用した。

一方、記事Bにある `text-scale`、Web App Manifest、Markdown版、Standard.site、Fediverse著者属性などは、サイトの要件に応じて選ぶ拡張項目である。差を埋める目的だけで一括導入すべきではない。

## 比較方法

記事A・Bについて、記事本文が提示する定型コードと各項目の説明を確認した。さらに、記事ページ自身が配信している実際の `<head>` も確認した。

記事Bの「My boilerplate」は汎用サンプルであり、記事ページ自身の実装とは一部異なる。例えばサンプルは `rel="canonical"` を essential としているが、調査時点の記事ページ自身には canonical link がなく、サンプルは `viewport` から `initial-scale` を省いているが、実ページは `initial-scale=1.0` を使用している。本レポートの主比較は、記事ページの偶発的な実装ではなく、記事が明示した定型・評価に基づく。

リポジトリ側は次を確認した。

- 共通 `<head>`: [`components/Layout.tsx`](../components/Layout.tsx)
- HTML 文書と解析スクリプト: [`pages/_document.js`](../pages/_document.js)
- 記事 OGP / Twitter Card: [`components/Ogp.tsx`](../components/Ogp.tsx)
- トップページ OGP: [`components/OgpHeader.tsx`](../components/OgpHeader.tsx)
- 記事ページから OGP へ渡す値: [`pages/entry/[[...slug]].tsx`](../pages/entry/[[...slug]].tsx)
- 既存の静的出力: `out/index.html` と `out/entry/2012/04/28/193710.html`

既存静的出力から、Next.js がソースにない `charset` と `viewport` を補完すること、実際のタグ順、サムネイル未設定時の出力を確認した。この調査では再ビルドしていない。

## 三者比較

### 文書基盤・メタデータ

| 項目 | 記事A: 富永日記帳 | 記事B: Matuzović | このリポジトリ | 評価 |
|---|---|---|---|---|
| DOCTYPE | `<!doctype html>` | `<!DOCTYPE html>`、互換性のため必須 | `<!DOCTYPE html>` | 表記差だけで三者とも同等。 |
| `lang` | `lang="ja"` | `lang="en"`、重要・必須 | `lang="ja"` | リポジトリは適切。 |
| `<html prefix>` | OGP用に設定。ただし主要SNSでは省略可 | なし | なし | 対応不要。 |
| `no-js` / `js` class | なし | 任意。JS無効時やWeb Components描画制御に使用 | なし | 必要なUIがなければ不要。 |
| 文字コード | HTTPヘッダーを根拠に `<meta charset>` を省略 | `<meta charset="UTF-8">` を必須評価 | Next.jsが `<meta charset="utf-8">` を出力 | 2記事の方針が分かれる。静的配信では現状維持が安全。 |
| viewport | `width=device-width,initial-scale=1` | `width=device-width`。`initial-scale=1` は通常不要 | `width=device-width` | リポジトリは記事Bと一致。 |
| `text-scale` | 実験的に採用し、一般サイトは慎重に判断 | optional。レイアウト検証を要求 | なし | 現時点では追加を急がない。 |
| `<title>` | 記事ページは記事名のみ | `Unique page title - My Site` | `記事名 \| FUN YOU BLOG` | リポジトリは記事B型。正誤ではなく編集方針の差。 |
| description | 定型例にはなし | `name="description"` を essential 評価 | `name="description"` | 修正済み。記事・一覧とも通常descriptionを出力する。 |
| canonical | 定型例にはなし | `rel="canonical"` を essential 評価 | 全ページに自己参照canonical | 対応済み。OGP URLと同じURL生成処理を共用する。 |
| author | なし | `meta name="author"` を optional 評価 | なし | 必須ではない。 |
| theme color | なし | optional | なし | UI要件に応じて判断。 |
| color scheme | なし | optional | CSSに `prefers-color-scheme` はあるがmetaなし | 現状のCSSだけでもダークモードは動作する。 |

### CSS・JavaScript・アイコン

| 項目 | 記事A: 富永日記帳 | 記事B: Matuzović | このリポジトリ | 評価 |
|---|---|---|---|---|
| 通常CSS | 外部CSS | render-blocking CSS | styled-jsxのインラインCSS、Google Fonts | ビルド方式の差。 |
| 印刷CSS | リーダー表示用CSSを印刷にも使用 | 専用print CSSを good UX と評価 | なし | 2記事が印刷対応を採用。印刷需要があれば追加候補。 |
| 代替リーダーCSS | あり | なし | なし | 記事A固有の実験的機能。 |
| 同期script | 使用しない | 初期描画前に必要な場合のみ許容 | gtag初期化はインライン、外部gtagはasync | 重大なパース阻害は見当たらない。 |
| module / defer | module、async、deferのみ | moduleを既定として推奨 | Next.jsチャンクはdefer | 非同期化の目的は概ね一致。 |
| ICO favicon | 暗黙探索を利用 | 明示linkを essential 評価 | 明示linkあり | リポジトリは記事Bと一致し、互換性重視。 |
| SVG favicon | SVGを `/favicon.ico` で提供 | ICOとSVGを併記 | なし | 高解像度・ダークモード対応が必要なら追加候補。 |
| Apple touch icon | なし | 明示linkを推奨 | なし | ホーム画面追加を重視する場合の不足。 |
| Web App Manifest | なし | essential 評価 | なし | PWAまたはホーム画面追加を対象にする場合のみ優先度が上がる。 |

### フィード・代替表現・分散Web

| 項目 | 記事A: 富永日記帳 | 記事B: Matuzović | このリポジトリ | 評価 |
|---|---|---|---|---|
| フィード | Atom `/feed`、全ページ | Atomをoptional評価 | RSS `/feed.xml`、全ページ | 目的は一致。フォーマット差だけ。 |
| Markdown版 | なし | `alternate type="text/markdown"` をoptional評価 | なし | Markdownを配信していないため、現状は追加不能。 |
| Mastodon所有確認 | なし | `rel="me"` をoptional評価 | `<head>` にはなし | 必要なら表示中のMastodonリンクへ `rel="me"` を付ける方法もある。 |
| Standard.site | なし | `rel="site.standard.publication"` をoptional評価 | なし | 採用意思がある場合のみ。 |
| Fediverse著者属性 | なし | `fediverse:creator` をoptional評価 | なし | Mastodonで著者表示を重視する場合の候補。 |

### OGP・共有カード・構造化データ

| 項目 | 記事A: 富永日記帳 | 記事B: Matuzović | このリポジトリ | 評価 |
|---|---|---|---|---|
| OGPの適用 | 画像のある記事だけOGP一式を出力 | `og:image` と `og:url` をessential評価 | 基本OGPは全記事、画像関連はサムネイルありの場合だけ出力 | 空画像URLを解消済み。 |
| `og:url` | 正規の記事URL | canonicalと同じ値を必須評価 | canonicalと同じ正規URL | 年月日とURLエンコードを含めて修正済み。 |
| `og:type` | 記事は `article` | optional。記事なら `article` と日時を例示 | 記事は `article`、一覧は `website` | 修正済み。 |
| `og:title` / `og:description` | OGPを出す記事では設定 | 通常title/descriptionと変えたい場合だけoptional | 常に専用タグを出力 | 重複自体は問題ないが、必須ではない。 |
| `og:image:alt` | 定型例にはなし | optional。サービスごとの対応差に注意 | サムネイルがある場合だけ出力 | 修正済み。 |
| `og:locale` | `ja_JP` | optional。本文とカードの言語が異なる場合に有用 | `ja_JP` | 修正済み。 |
| Twitter Card | 廃止済み | 定型例に専用Twitterタグなし | 詳細に出力 | X/Twitterを共有先として維持するかという運用判断。 |
| 記事日時 | JSON-LDの公開日・更新日 | `article:published_time` / `modified_time` の例 | JSON-LDと `article:published_time` に公開日を出力 | 対応済み。未管理の更新日は推測で出力しない。 |
| JSON-LD | `BlogPosting` を採用 | 定型例にはなし | `BlogPosting` を出力 | 見出し、公開日、正規URL、任意画像を出力する。 |

## 2記事で一致する点・分かれる点

### おおむね一致

- `lang` と viewport は基本要素である。
- `initial-scale=1` は現代の主要環境では不要な可能性が高い。記事Aは未検証の保険として残し、記事Bはサンプルから外している。
- `text-scale` は有望だが、コピーするだけではなく実機・拡大レイアウトの検証が必要である。
- 外部JavaScriptは原則としてmodule、async、defer等で初期描画を不用意に止めない。
- フィード自動検出は現在も有用である。
- 印刷用スタイルを提供している。
- OGP画像は実在する正規の画像URLである必要がある。

### 方針が分かれる

- 文字コード: 記事AはHTTPヘッダーを信頼してmetaを省略し、記事Bはmetaを必須とする。
- タイトル: 記事Aは個別記事からサイト名を外し、記事Bはサイト名付きの例を示す。
- ファビコン: 記事Aは暗黙探索を使い、記事BはICO・SVG・Apple touch iconをすべて明示する。ただし記事Aも明示的なフォールバックのほうが安全とは認めている。
- OGP: 記事Aは画像のない記事ではOGP一式を省略する。記事Bは `og:image` と `og:url` を基本定型に置く。
- 同期JavaScript: 記事Aは使わず、記事Bは初期描画前に本当に必要な用途に限って認める。
- JSON-LD: 記事Aは採用し、記事Bの定型には含まれない。

このため、両記事との差を機械的にゼロにすることはできない。要件と配信方式に合う方針を選ぶ必要がある。

## 反映結果（旧・修正優先度）

### 反映済み（高）: `og:url` と実ページの一致

記事ルート `/entry/YYYY/MM/DD/slug` を [`pages/entry/[[...slug]].tsx`](../pages/entry/[[...slug]].tsx) で組み立て、[`components/Ogp.tsx`](../components/Ogp.tsx) と共通Layoutへ渡すようにした。

生成後の `out/entry/2012/04/28/193710.html` では、canonicalと `og:url` がともに `https://blog.alfebelow.com/entry/2012/04/28/193710` になった。

記事Bは、クエリパラメーター付きURL等が別エンティティとしてキャッシュされないよう、`og:url` に canonical と同じ正規URLを入れることを essential と評価している。

共通の [`lib/site.ts`](../lib/site.ts) で絶対URL化とパスセグメントのエンコードを行う。`#` を含む既存記事もフラグメントにならず `%23` で出力されることを確認した。

### 反映済み（高）: サムネイル未設定時の画像メタデータ

従来は未設定時にも次の不正な値を出力していた。

```html
<meta property="og:image" content="https://blog.alfebelow.com">
<meta name="twitter:image" content="https://blog.alfebelow.com">
```

これは画像URLではなく、`og:image:width`、`og:image:height`、`og:image:alt` も実体のない画像について出力される。

修正後は、サムネイルがある場合だけOGP/Twitterの画像、寸法、代替テキストを出力する。画像なし記事のTwitter Cardは `summary`、画像あり記事は `summary_large_image` とした。

### 反映済み（高）: 記事の `og:type`

記事Aは記事ページを `article` とし、記事Bも `article` と公開・更新日時の組み合わせを例示する。リポジトリは記事でも `website` を固定出力している。

[`components/Ogp.tsx`](../components/Ogp.tsx) は `article`、[`components/OgpHeader.tsx`](../components/OgpHeader.tsx) は `website` とした。

### 反映済み（高）: description の属性名

[`components/Ogp.tsx`](../components/Ogp.tsx) は通常の説明を次のように出力する。

```html
<meta property="description" content="...">
```

記事Bが示す一般的なページ説明は `name="description"` である。`og:description` は別タグとしてすでに存在する。

`property="description"` を `name="description"` に変更し、一覧ページにも通常descriptionを追加した。

### 反映済み（中〜高）: canonical link

記事Bは `rel="canonical"` を essential と評価する。このリポジトリには日付入りURL、過去URL用リダイレクト、クエリパラメーター付きURLがあり得るため、正規URLを明示した。

トップ、記事、カテゴリ、年別、アーカイブに自己参照canonicalを出し、各ページの `og:url` と同じ値にした。

### 反映済み（中）: 記事日時の構造化データ

記事Aは `BlogPosting` JSON-LD、記事Bは `article:published_time` と `article:modified_time` を提示する。リポジトリは公開日を表示するが、`<head>` では機械可読な日時を出していない。

`BlogPosting` JSON-LDに `headline`、`datePublished`、`url`、任意の `image` を追加し、OGPの `article:published_time` も併用した。更新日は管理していないため `dateModified` を出力しない。

### 反映済み（中）: `og:locale`

Open Graphの `language_TERRITORY` 形式に合わせ、記事・一覧とも `ja_JP` に変更した。

### 任意: 印刷、アイコン、Manifest、分散Web

- 2記事にならい、読みやすく紙・インクを節約するprint CSSを追加する。
- SVG faviconとApple touch iconを追加する。
- ホーム画面追加を支援するならWeb App Manifestを追加する。
- Mastodonでの著者表示が重要なら `rel="me"` または `fediverse:creator` を検討する。
- Markdown版やStandard.siteは、対応リソースを実際に提供する場合だけlinkを追加する。

## 補足: 画面上の `<header>` の差分

指定された2記事はいずれもHTML文書の `<head>` を主題とするため、ここまでは文書メタデータを比較した。「ヘッダー」を表示領域の `<header>` と解釈した場合、記事Aのサイトとこのリポジトリには次の差がある。

| 要素 | 記事Aのサイト | このリポジトリ |
|---|---|---|
| サイト名 | 「富永日記帳」、トップへのリンク | 「FUN YOU BLOG」、トップへのリンク |
| サイト説明 | あり | なし |
| フィード導線 | アイコン付き「新着フィード」ボタン | 画面上にはなし。文書 `<head>` にRSSリンクのみ |
| サイト内検索 | 検索エンジン選択、検索入力、送信ボタン | なし |
| 構造 | サイト情報領域とユーティリティ領域に分割 | 中央寄せしたサイト名だけ |
| 見た目 | 複数機能を収めた情報・操作ヘッダー | 3rem、緑色、テキストシャドウ付きのロゴ見出し |

これは主に提供機能と情報設計の差であり、文書 `<head>` の問題とは分けて判断すべきである。

## 実施済み項目と今後の任意項目

1. 正規URL、canonical、OGP URLの共用: 実施済み。
2. 画像メタデータの条件分岐: 実施済み。
3. 記事type、description、locale: 実施済み。
4. `BlogPosting` JSON-LDとOGP公開日時: 実施済み。
5. print CSS、SVG・Apple用アイコン、Manifest: 任意。対象ユーザーと運用コストを見て選ぶ。
6. タイトル表記、Twitter Card、`text-scale`、Fediverse関連: 任意。サイト方針として別途判断する。
