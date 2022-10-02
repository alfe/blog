---
Title: PCにストリートビュー＋スマホに地図 with milkcocoa
Category:
- プログラム
Date: 2015-01-27T21:14:54+09:00
---


 

<img class="hatena-fotolife" title="f:id:alfe1025:20150127211107g:plain" src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20150127/20150127211107.gif" alt="f:id:alfe1025:20150127211107g:plain" width="276" /><img class="hatena-fotolife" title="f:id:alfe1025:20150127211118g:plain" src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20150127/20150127211118.gif" alt="f:id:alfe1025:20150127211118g:plain" width="278" />

 

ひさびさに情報系っぽい記事。

 

milkcocoaというサービスがとても気に入ったので紹介します。

<a href="https://mlkcca.com/">Milkcocoa - JavaScript一行に詰め込まれたバックエンド</a>

<!-- more -->
<h4>milkcocoa </h4>

<img class="hatena-fotolife" title="f:id:alfe1025:20150127211027p:plain" src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20150127/20150127211027.png" alt="f:id:alfe1025:20150127211027p:plain" width="344" />

&gt;milkcocoaはデータをリアルタイムで、保存・同期できる自由度の高いAPIです。

と公式で紹介しているように、かなり自由度高めなサービスです。

いろんなデータを飲み込んでくれるので、JavascriptのObjectもそのまま読み込んでくれます。

<strong><strong> </strong></strong>

はじめてmilkcocoaにふれるときは、LIGの解説記事（<a href="https://liginc.co.jp/web/programming/server/129348">https://liginc.co.jp/web/programming/server/129348</a>）がわかりやすくておすすめ。

<strong><strong> </strong></strong>

### つくったもの


PCのストリートビューで移動

<strong><strong> <img class="hatena-fotolife" title="f:id:alfe1025:20150127211107g:plain" src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20150127/20150127211107.gif" alt="f:id:alfe1025:20150127211107g:plain" width="503" /></strong></strong>

 

すると、スマホ（もしくはタブレット）にストリートビューの位置が反映されます

<img class="hatena-fotolife" title="f:id:alfe1025:20150127211118g:plain" src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20150127/20150127211118.gif" alt="f:id:alfe1025:20150127211118g:plain" width="461" />

<strong><strong> </strong></strong>
<h4>デモ</h4>

PCのストリートビュー<br />https://alfe.xyz/funyou/streetview_milkcocoa/

 

位置を反映する地図<br />https://alfe.xyz/funyou/streetview_milkcocoa/map.html

<strong><strong> </strong></strong>

### まとめ


これをWebソケットで実装しようとすると、サーバー立てて、Node.jsの設定して、、、と結構ごちゃごちゃしたことをしないといけないのです。

milkcocoaのおかげで通信部が４行ですむ。ありがたい。

<strong><strong> </strong></strong>

milkcocoaはまだβ版なので、これからの発展に期待ですね。

<strong><strong> </strong></strong>
<h4>追記 1</h4>

milkcocoaにソケットのログが残るので、移動した形跡をとろうとすればとれる。

 
<h4>追記2</h4>

<span style="color: #000000; font-family: 'Helvetica Neue', Helvetica, Arial, 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', メイリオ, Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif; font-size: 16px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 24px; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: auto; word-spacing: 0px; -webkit-text-stroke-width: 0px; display: inline !important; float: none; background-color: #ffffff;">ストリートビューの位置を表示している靴のアイコンは、以前芸大生につくってもらったもの。いろいろ多用しています。感謝。</span>
<h4>追記 3</h4>

ソースコードをペチッと貼付けておく

<iframe class="embed-card embed-webcard" style="width: 100%; height: 155px; max-width: 500px; margin: auto;" title="alfe/streetview_milkcocoa" src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fgithub.com%2Falfe%2Fstreetview_milkcocoa%2Ftree%2Fmaster" frameborder="0" scrolling="no">&amp;amp;amp;lt;a href="https://github.com/alfe/streetview_milkcocoa/tree/master" data-mce-href="https://github.com/alfe/streetview_milkcocoa/tree/master"&amp;amp;amp;gt;alfe/streetview_milkcocoa&amp;amp;amp;lt;/a&amp;amp;amp;gt;</iframe><br /> <a href="https://github.com/alfe/streetview_milkcocoa/tree/master">alfe/streetview_milkcocoa · GitHub</a>
<h4> </h4>

<strong><br /><br /></strong>
