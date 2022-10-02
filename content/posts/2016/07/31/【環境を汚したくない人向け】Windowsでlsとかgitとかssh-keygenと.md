---
Title: 【環境を汚したくない人向け】Windowsでlsとかgitとかssh-keygenとかvimを使えるようにするcmder
Category:
- プログラム
Date: 2016-07-31T12:40:08+09:00
IMAGE: https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20160731/20160731123937.png
---

<p>Windows機で開発しようとすると、コマンドライン使いにくい問題が発生します。</p>
<p> </p>
<p>Windows10になってある程度はマシになったんですが、それでもやっぱり使いにくい。</p>
<p>&gt; ls って打って</p>
<blockquote>
<p>'ls' は、内部コマンドまたは外部コマンド、</p>
<p>操作可能なプログラムまたはバッチ ファイルとして認識されていません。 </p>
</blockquote>
<p>と返ってきたときの、あー・・・って感じ。エンジニアあるあるだと思ってる。</p>
<p> </p>
<p>でもなー PowerShellとかCygwinっていい思い出ないんだよなー</p>
<p>大学時代の講義とかで使わされたけど、消そうとするとゴミが残るしあまり入れたくないなー。ちょっとしたトラブルのときにgit statusとかssh-keygenって打てればいいだけなんだけど。</p>
<p> </p>
<p>おや。何かデザインのいいターミナルソフトがあるな。</p>
<p>え。ポータブルなんだけど。なにこれ。</p>
<p> </p>

# cmder

<p><iframe class="embed-card embed-webcard" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: auto;" title="cmder | Console Emulator" src="//hatenablog-parts.com/embed?url=http%3A%2F%2Fcmder.net%2F" frameborder="0" scrolling="no"></iframe><cite class="hatena-citation"><a href="https://cmder.net/">cmder.net</a></cite></p>
<p>ページ真ん中くらいにある[Download full]からダウンロードできる。</p>
<p>zipファイルを落としてきて解凍するとすぐ使える。</p>
<p>インストーラーすら必要ない。</p>
<p>USBメモリにターミナルが入る時代。</p>
<p>なにそれつよい。</p>
<p> </p>
<p>見た目はこんな感じ↓</p>
<p>デフォルトの設定では複数タブとか使えるようになってる。</p>
<p>私は見た目すっきりが好きなので消した。ショートカットキーでタブ切り替えできるし。</p>
<p><img class="hatena-fotolife" title="f:id:alfe1025:20160731123937p:plain" src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20160731/20160731123937.png" alt="f:id:alfe1025:20160731123937p:plain" /></p>
<p> </p>
<p>Unixコマンドで多用しそうなのはだいたい入ってる。</p>
<p>例えば、</p>
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
<p>とか。</p>
<p>このあたりってWindowsには入ってないんですよね。</p>
<p>gitをコマンドラインで打てる環境があると、ちょっとしたトラブルシューティングで便利ですよね。</p>
<p> </p>
<p>逆にcrontabとか使えないコマンドもあって。</p>
<p>この辺りはしかたないかなーと。</p>
<p>ポータブルだからcronの設定できないだろうし。</p>
<p> </p>
<p>あとifconfigも使えなかった。ipconfig 使ってくれってことですかね。</p>
<p> </p>

# まとめ

<p>zip解凍だけなので、レジストリ汚さない。</p>
<p>そんなわけで、ちょこっと使いたいときとか、環境設定めんどくさいときとかにおすすめ。</p>
