---
Title: JavaScriptでURLを扱うのにpurlが便利という話
Category:
- プログラム
Date: 2013-12-14T08:12:37+09:00
---


大学の卒研のため、Webページ使っていろいろしているんですが、
作業ページが増えてくるにしたがって、urlの扱いに困るようになりました。

作業ページ開くのに、「url+フラグ」とかで開ければかっこいいなとか思って
いろいろ調べてみると、purl.js というのが便利そうなのでメモ。


使い方は簡単
purl.js(https://github.com/allmarkedup/purl)から、purl.jsをダウンロード。

>||
<script src="purl.js"></script>
||<
で purlを読み込む。

>||
<SCRIPT language="JavaScript">
  if(purl().attr('fragment') == "up"){
     location.href = "./test/up/uploader.html"
  }
</SCRIPT>
||<
としてやると、
http://hoge/#up
と入力して
http://hoge/test/up/uploader.html
に飛んでくれるというわけです。

purl() が 現在のURL
.attr('fragment') で #up のような #がついた文字列(フラグ)を読み取ってくれます。

indexページの隠しリンクとして仕組んだり、
フラグから読み込む画像ファイルを変更とかしたり。
使いどころはいろいろありますよ。
