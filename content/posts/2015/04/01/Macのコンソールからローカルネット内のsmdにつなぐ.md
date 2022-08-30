---
Title: Macのコンソールからローカルネット内のsmdにつなぐ
Category:
- プログラム
Date: 2015-04-01T22:22:17+09:00
URL: https://blog.alfebelow.com/entry/2015/04/01/Mac%E3%81%AE%E3%82%B3%E3%83%B3%E3%82%BD%E3%83%BC%E3%83%AB%E3%81%8B%E3%82%89%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%83%8D%E3%83%83%E3%83%88%E5%86%85%E3%81%AEsmd%E3%81%AB%E3%81%A4%E3%81%AA%E3%81%90
---

<p>忘備録的なアレ。</p>
<p><a class="http-image" href="http://www.flickr.com/photos/78137955@N00/477844434" target="_blank"><img class="http-image" src="http://farm1.staticflickr.com/199/477844434_7d6d15e457.jpg" alt="http://www.flickr.com/photos/78137955@N00/477844434" width="360" /></a></p>
<p><a href="http://www.flickr.com/photos/78137955@N00/477844434">photo by Tom Carmony</a></p>
<p> </p>
<p>コンソールにこんな感じで打てばOK </p>
<blockquote>
<p>/sbin/mount_smbfs //smbserver1/Share/ ~/smb</p>
</blockquote>
<p> </p>
<p> <span style="color: #000000; font-family: 'Helvetica Neue', Helvetica, Arial, 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', メイリオ, Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif; font-size: 16px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 24px; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; display: inline !important; float: none; background-color: #ffffff;">/sbin/mount_smbfs がコマンド。</span></p>
<p><span style="color: #000000; font-family: 'Helvetica Neue', Helvetica, Arial, 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', メイリオ, Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif; font-size: 16px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 24px; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; display: inline !important; float: none; background-color: #ffffff;">パスが通ってるなら mount_smbfs だけでも可 </span></p>
<p> </p>
<p>コマンドの使い方は</p>
<p>/sbin/mount_smbfs （マウントするsmbサーバ）（ディレクトリ）</p>
<p> </p>
<p> </p>
