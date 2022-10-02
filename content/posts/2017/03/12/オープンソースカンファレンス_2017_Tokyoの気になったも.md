---
Title: オープンソースカンファレンス 2017 Tokyoの気になったもの
Category:
- 雑記
Date: 2017-03-12T12:07:51+09:00
---


ふらっと見てきた。

 

### オープンソースカンファレンス 2017 Tokyo/Spring #とは


3月10日(金)～3月11日(土)に明星大学 日野キャンパスで開催された、オープンソースに関する展示会みたいなイベント。

 

ちなみに、明星大学は多摩動物公園のすぐ近く。

<iframe class="embed-card embed-webcard" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: auto;" title="オープンソースカンファレンス2017 Tokyo/Spring - オープンソースの文化祭！" src="//hatenablog-parts.com/embed?url=https%3A%2F%2Fwww.ospn.jp%2Fosc2017-spring%2F" frameborder="0" scrolling="no"></iframe>

 

<img class="magnifiable" src="https://lh3.googleusercontent.com/-rlq8oqfjwms/WMP342gFH0I/AAAAAAAAYsM/yLdK1rLQkb8e7CkuC-qiRZbnWh4ZNdklgCE0/s1024/DSC00849.JPG" alt="" />

 

### 会場の雰囲気


イベントのノリとしてはパネルディスカッション的。

ただパネルの代わりにデモが展示している。

 

加えて、いくつかの講義室でLTやセッションが開かれている。

<iframe class="embed-card embed-webcard" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: auto;" title="#osc17tk hashtag on Twitter" src="//hatenablog-parts.com/embed?url=https%3A%2F%2Ftwitter.com%2Fhashtag%2Fosc17tk" frameborder="0" scrolling="no"></iframe>

 

### で。気になったもの

<h4>プラレールで半加算器(Ver.2.1.1)</h4>

<span style="color: #333333; font-family: Arial, Helvetica, sans-serif; font-size: 12.74px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; display: inline !important; float: none;">マリオメーカー計算機と同じ要領で、プラレールを使って作った半加算器のデモ。</span>

<img class="magnifiable" src="https://lh3.googleusercontent.com/-SidgFwfDp4Q/WMP4dB6aqqI/AAAAAAAAYsg/jcupEKjFxg8orI4xNCGq5r6BWFjjPPAegCE0/s1024/DSC00851.JPG" alt="" />

 

技術的な解説は <a href="https://cybozushiki.cybozu.co.jp/articles/m001205.html">プラレールで半加算器を設計した話 | サイボウズ式</a> を参考にとのこと。

なお、この記事で書かれているものより31%の小型化を実現しているとか。

 

計算結果がこんな感じに出てくる。

写真の状態は C：１、S：０ なのだとか。

<img class="magnifiable" src="https://lh3.googleusercontent.com/-1BFfq3mkgUA/WMP4byUE38I/AAAAAAAAYsg/vwtu92RziM4HcB59h5KmKqseHENG5e_tQCE0/s1024/DSC00852.JPG" alt="" />

 
<h4>日本 openSUSE ユーザ会</h4>

openSUSE というLinux ディストリビューションを広める活動を行っているグループ。

そもそもopenSUSEを知らなかったので、どんな特徴があるのか話を聞いてみたところ興味が出てきた。

<img class="magnifiable" src="https://lh3.googleusercontent.com/-49jv7lzK8Vw/WMS2Wrmq6eI/AAAAAAAAYyw/E1OghElsQL0N05GyyOfAICQU0M2OM0powCE0/s1024/DSC00901.JPG" alt="" />

 

特に気になったのがYaSTの話とWindows10のUbuntu Bashと置き換え可能という話。

 

<span style="color: #3d3f44; font-family: 'Helvetica Neue', Helvetica, Arial, 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', メイリオ, Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; display: inline !important; float: none;">YaSTというというのはOSの設定とGUIで操作できるという機能。</span>

これまでのようにコマンドを叩くことも可能だが、あんまり使わない設定はコマンド覚えるよりもGUIで操作したほうが楽だよね、と。

 

<span style="color: #3d3f44; font-family: 'Helvetica Neue', Helvetica, Arial, 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', メイリオ, Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; display: inline !important; float: none;">Windows10のUbuntu Bashに置き換える方法は </span><a href="https://www.suse.com/communities/blog/make-windows-green-part-1/">Make Windows green again – Part 1 - SUSE Blog | SUSE Communities</a> に詳細あり。

もちろんYaSTも動く。見せてもらうと、テキストベースのGUIが出てきていた。

 

### Cpaw


スマホで操作するロボットアームの展示。

写真に写っているRaspberry Piが、ロボットアームの制御と、スマホへ操作画面ぺージを表示するためのWebサーバを両方担っているのだとか。

<img class="magnifiable" src="https://lh3.googleusercontent.com/-rbO_3L51XpA/WMP4ZCy0RnI/AAAAAAAAYsg/nU3e2YmPpNo0-qU2ZAaDbM3ie-pYyUxBgCE0/s1024/DSC00856.JPG" alt="" />

<img class="magnifiable" src="https://lh3.googleusercontent.com/-mqv_HVTcrHw/WMP4YdK0YpI/AAAAAAAAYsg/nmaTUjunZFMdk6MYTqcW5SuZmXW2hCnvwCE0/s1024/DSC00857.JPG" alt="" />

 

### 書籍販売ブース

<blockquote class="twitter-tweet" data-lang="ja">
<p dir="ltr" lang="ja">【OSC東京】オライリー、翔泳社、インプレスは並んで書籍販売中！ 会場特別価格でお得に購入できます！ <a href="https://twitter.com/hashtag/osc17tk?src=hash">#osc17tk</a> <a href="https://t.co/hl4msmoClf">pic.twitter.com/hl4msmoClf</a>
— OSC【公式】 (@OSC_official) <a href="https://twitter.com/OSC_official/status/840116583087321088">2017年3月10日</a></blockquote>


<script src="//platform.twitter.com/widgets.js" async="" charset="utf-8"></script>


 

<span style="color: #3d3f44; font-family: 'Helvetica Neue', Helvetica, Arial, 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', メイリオ, Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; display: inline !important; float: none;">オライリーが18%オフ。やばい。</span>

 

その結果。

[https://twitter.com/alfe_below/status/840418607116910592:embed#オライリーブースで調子に乗って二万くらい本買い込んだので、カバンが重い]

 

買ったものはこちら

<img class="magnifiable" src="https://lh3.googleusercontent.com/-7cv9RnNxwIA/WMSvOkhMVuI/AAAAAAAAYyc/k08Xs5G2eaER7FJdcyZmc39nXBEYh_jiACE0/s1024/DSC00900.JPG" alt="" />

オライリーの本は高いけども、情報の質がいい。

 

### で、会場を後にした後


[https://twitter.com/alfe_below/status/840419899348459520:embed#で。 https://t.co/rHw9hiXupB]

[https://twitter.com/alfe_below/status/840441278085050368:embed#サーバル https://t.co/fCuMPrrxTo]

[https://twitter.com/alfe_below/status/840441118953168900:embed#良さ https://t.co/IkM4NUeuWv]

 

買った本を背負いながら多摩動物公園へ。

何やってんだって感じだが、本人はとても満足してる。

 

 

 

### 類似記事


<iframe class="embed-card embed-blogcard" style="display: block; width: 100%; height: 190px; max-width: 500px; margin: auto;" title="Maker Faire Tokyo 2016レポ - FUN YOU BLOG" src="/entry/2016/08/07/Maker_Faire_Tokyo_2016" frameborder="0" scrolling="no"></iframe><cite class="hatena-citation"><a href="/entry/2016/08/07/Maker_Faire_Tokyo_2016">blog.alfebelow.com</a> </cite>

 

<iframe class="embed-card embed-blogcard" style="display: block; width: 100%; height: 190px; max-width: 500px; margin: auto;" title="世界を変えた書物展＠大阪 - FUN YOU BLOG" src="/entry/2015/11/15/%E4%B8%96%E7%95%8C%E3%82%92%E5%A4%89%E3%81%88%E3%81%9F%E6%9B%B8%E7%89%A9%E5%B1%95%EF%BC%A0%E5%A4%A7%E9%98%AA" frameborder="0" scrolling="no"></iframe><cite class="hatena-citation"><a href="/entry/2015/11/15/%E4%B8%96%E7%95%8C%E3%82%92%E5%A4%89%E3%81%88%E3%81%9F%E6%9B%B8%E7%89%A9%E5%B1%95%EF%BC%A0%E5%A4%A7%E9%98%AA">blog.alfebelow.com</a></cite>

 

 
