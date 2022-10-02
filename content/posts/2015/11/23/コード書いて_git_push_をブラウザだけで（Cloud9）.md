---
Title: コード書いて git push をブラウザだけで（Cloud9）
Category:
- プログラム
Date: 2015-11-23T13:13:37+09:00
---

<p>最近 Cloud9を使っている。</p>
<p><iframe class="embed-card embed-webcard" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: auto;" title="Cloud9 - Your development environment, in the cloud" src="//hatenablog-parts.com/embed?url=https%3A%2F%2Fc9.io%2F" frameborder="0" scrolling="no"></iframe></p>
<p> </p>
<p>なにがすごいって、ブラウザだけでコーディングができるのですよ。</p>
<p> </p>
<p> </p>
<p>GithubかBitbucketのアカウントがあると、とてもスムーズに登録できる。</p>
<p><img class="hatena-fotolife" title="f:id:alfe1025:20151123125845p:plain" src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20151123/20151123125845.png" alt="f:id:alfe1025:20151123125845p:plain" /></p>
<p> </p>
<p>ログインすると、こんな画面。</p>
<p><img class="hatena-fotolife" title="f:id:alfe1025:20151123130133p:plain" src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20151123/20151123130133.png" alt="f:id:alfe1025:20151123130133p:plain" /></p>
<p><span style="color: #3d3f44; font-family: 'Helvetica Neue', Helvetica, Arial, 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', メイリオ, Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif; font-size: 16px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 24px; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; display: inline !important; float: none; background-color: #ffffff;">Githubや</span><span style="color: #3d3f44; font-family: 'Helvetica Neue', Helvetica, Arial, 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', メイリオ, Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif; font-size: 16px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 24px; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; display: inline !important; float: none; background-color: #ffffff;">Bitbucketになにかしらpushしているなら、左のRepositoriesをクリック。</span></p>
<p>新しく作るなら Create a new workspace をクリックして作成。</p>
<p> </p>
<p>そうすると</p>
<p><img class="hatena-fotolife" title="f:id:alfe1025:20151123130726p:plain" src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20151123/20151123130726.png" alt="f:id:alfe1025:20151123130726p:plain" /></p>
<p>IDEが開くのであとは編集するだけ。</p>
<p>変更が終わったら 上バーの Run を押すと実行できます。（Web系言語だと仮想でApacheが起動する。Rubyなんかも動く。）</p>
<p> </p>
<p>実行確認したら、右下のコンソールでgit commit -&gt; git push ができます。</p>
<p> </p>
<p>Gitの環境が入っていないWindowsPCとかChrome booksとかでも使えるので便利。</p>
<p>貧弱なノートPCに開発環境を構築する必要がないというのは、それだけでありがたいよね</p>
