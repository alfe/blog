---
Title: PCにストリートビュー＋スマホに地図 with milkcocoa
Category:
- プログラム
Date: 2015-01-27T21:14:54+09:00
URL: https://blog.alfebelow.com/entry/streetview%2Bmilkcocoa
---

<p> </p>
<p><img class="hatena-fotolife" title="f:id:alfe1025:20150127211107g:plain" src="http://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20150127/20150127211107.gif" alt="f:id:alfe1025:20150127211107g:plain" width="276" /><img class="hatena-fotolife" title="f:id:alfe1025:20150127211118g:plain" src="http://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20150127/20150127211118.gif" alt="f:id:alfe1025:20150127211118g:plain" width="278" /></p>
<p> </p>
<p>ひさびさに情報系っぽい記事。</p>
<p> </p>
<p>milkcocoaというサービスがとても気に入ったので紹介します。</p>
<p><a href="https://mlkcca.com/">Milkcocoa - JavaScript一行に詰め込まれたバックエンド</a></p>
<p><!-- more --></p>
<h4>milkcocoa </h4>
<p><img class="hatena-fotolife" title="f:id:alfe1025:20150127211027p:plain" src="http://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20150127/20150127211027.png" alt="f:id:alfe1025:20150127211027p:plain" width="344" /></p>
<p>&gt;milkcocoaはデータをリアルタイムで、保存・同期できる自由度の高いAPIです。</p>
<p>と公式で紹介しているように、かなり自由度高めなサービスです。</p>
<p>いろんなデータを飲み込んでくれるので、JavascriptのObjectもそのまま読み込んでくれます。</p>
<p><strong><strong> </strong></strong></p>
<p>はじめてmilkcocoaにふれるときは、LIGの解説記事（<a href="http://liginc.co.jp/web/programming/server/129348">http://liginc.co.jp/web/programming/server/129348</a>）がわかりやすくておすすめ。</p>
<p><strong><strong> </strong></strong></p>

### つくったもの

<p>PCのストリートビューで移動</p>
<p><strong><strong> <img class="hatena-fotolife" title="f:id:alfe1025:20150127211107g:plain" src="http://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20150127/20150127211107.gif" alt="f:id:alfe1025:20150127211107g:plain" width="503" /></strong></strong></p>
<p> </p>
<p>すると、スマホ（もしくはタブレット）にストリートビューの位置が反映されます</p>
<p><img class="hatena-fotolife" title="f:id:alfe1025:20150127211118g:plain" src="http://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20150127/20150127211118.gif" alt="f:id:alfe1025:20150127211118g:plain" width="461" /></p>
<p><strong><strong> </strong></strong></p>
<h4>デモ</h4>
<p>PCのストリートビュー<br /><a href="http://alfe.xyz/funyou/streetview_milkcocoa/">http://alfe.xyz/funyou/streetview_milkcocoa/</a></p>
<p> </p>
<p>位置を反映する地図<br /><a href="http://alfe.xyz/funyou/streetview_milkcocoa/map.html">http://alfe.xyz/funyou/streetview_milkcocoa/map.html</a></p>
<p><strong><strong> </strong></strong></p>

### まとめ

<p>これをWebソケットで実装しようとすると、サーバー立てて、Node.jsの設定して、、、と結構ごちゃごちゃしたことをしないといけないのです。</p>
<p>milkcocoaのおかげで通信部が４行ですむ。ありがたい。</p>
<p><strong><strong> </strong></strong></p>
<p>milkcocoaはまだβ版なので、これからの発展に期待ですね。</p>
<p><strong><strong> </strong></strong></p>
<h4>追記 1</h4>
<p>milkcocoaにソケットのログが残るので、移動した形跡をとろうとすればとれる。</p>
<p> </p>
<h4>追記2</h4>
<p><span style="color: #000000; font-family: 'Helvetica Neue', Helvetica, Arial, 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', メイリオ, Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif; font-size: 16px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 24px; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: auto; word-spacing: 0px; -webkit-text-stroke-width: 0px; display: inline !important; float: none; background-color: #ffffff;">ストリートビューの位置を表示している靴のアイコンは、以前芸大生につくってもらったもの。いろいろ多用しています。感謝。</span></p>
<h4>追記 3</h4>
<p>ソースコードをペチッと貼付けておく</p>
<p><iframe class="embed-card embed-webcard" style="width: 100%; height: 155px; max-width: 500px; margin: 10px 0px;" title="alfe/streetview_milkcocoa" src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fgithub.com%2Falfe%2Fstreetview_milkcocoa%2Ftree%2Fmaster" frameborder="0" scrolling="no">&amp;amp;amp;lt;a href="https://github.com/alfe/streetview_milkcocoa/tree/master" data-mce-href="https://github.com/alfe/streetview_milkcocoa/tree/master"&amp;amp;amp;gt;alfe/streetview_milkcocoa&amp;amp;amp;lt;/a&amp;amp;amp;gt;</iframe><br /> <a href="https://github.com/alfe/streetview_milkcocoa/tree/master">alfe/streetview_milkcocoa · GitHub</a></p>
<h4> </h4>
<p><strong><br /><br /></strong></p>
