---
Title: 【環境を汚したくない人向け】Windowsでlsとかgitとかssh-keygenとかvimを使えるようにするcmder
Category:
- プログラム
Date: 2016-07-31T12:40:08+09:00
IMAGE: https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20160731/20160731123937.png
---


Windows機で開発しようとすると、コマンドライン使いにくい問題が発生します。

 

Windows10になってある程度はマシになったんですが、それでもやっぱり使いにくい。

&gt; ls って打って
<blockquote>

'ls' は、内部コマンドまたは外部コマンド、

操作可能なプログラムまたはバッチ ファイルとして認識されていません。 
</blockquote>

と返ってきたときの、あー・・・って感じ。エンジニアあるあるだと思ってる。

 

でもなー PowerShellとかCygwinっていい思い出ないんだよなー

大学時代の講義とかで使わされたけど、消そうとするとゴミが残るしあまり入れたくないなー。ちょっとしたトラブルのときにgit statusとかssh-keygenって打てればいいだけなんだけど。

 

おや。何かデザインのいいターミナルソフトがあるな。

え。ポータブルなんだけど。なにこれ。

 

# cmder


<iframe class="embed-card embed-webcard" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: auto;" title="cmder | Console Emulator" src="//hatenablog-parts.com/embed?url=http%3A%2F%2Fcmder.net%2F" frameborder="0" scrolling="no"></iframe><cite class="hatena-citation"><a href="https://cmder.net/">cmder.net</a></cite>

ページ真ん中くらいにある[Download full]からダウンロードできる。

zipファイルを落としてきて解凍するとすぐ使える。

インストーラーすら必要ない。

USBメモリにターミナルが入る時代。

なにそれつよい。

 

見た目はこんな感じ↓

デフォルトの設定では複数タブとか使えるようになってる。

私は見た目すっきりが好きなので消した。ショートカットキーでタブ切り替えできるし。

<img class="hatena-fotolife" title="f:id:alfe1025:20160731123937p:plain" src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20160731/20160731123937.png" alt="f:id:alfe1025:20160731123937p:plain" />

 

Unixコマンドで多用しそうなのはだいたい入ってる。

例えば、
<ul>
<li>ls</li>
<li>git</li>
<li>ssh</li>
<li>ssh-keygen</li>
<li>vim</li>
<li>less</li>
<li>cat</li>
<li>pwd</li>
<li>kill</li>
<li>touch</li>
</ul>

とか。

このあたりってWindowsには入ってないんですよね。

gitをコマンドラインで打てる環境があると、ちょっとしたトラブルシューティングで便利ですよね。

 

逆にcrontabとか使えないコマンドもあって。

この辺りはしかたないかなーと。

ポータブルだからcronの設定できないだろうし。

 

あとifconfigも使えなかった。ipconfig 使ってくれってことですかね。

 

# まとめ


zip解凍だけなので、レジストリ汚さない。

そんなわけで、ちょこっと使いたいときとか、環境設定めんどくさいときとかにおすすめ。
