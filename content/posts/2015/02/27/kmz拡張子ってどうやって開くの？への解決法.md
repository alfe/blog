---
Title: kmz拡張子ってどうやって開くの？への解決法
Category:
- プログラム
Date: 2015-02-27T14:55:04+09:00
---

[f:id:alfe1025:20150227144908p:plain]

google map engin からマップデータを取り出して使おうと思ったときに引っかかったのでメモ

一行で解決策を述べると、拡張子をzipにすれば開く

====




google map enginでkmlをエクスポート　いうボタンを押すと、なぜかkmzという形式でＤＬされる不思議。

[f:id:alfe1025:20150227144845p:plain]



で、このkmz、どうやって開くの？
メモ帳に直接突っ込んでも妙なコードしか出てこない


調べてみると、kmz は kmlをzipで圧縮したもの だそうな
ということで、mapdata.kmzをmapdata.zipに名前を変更して、適当な解凍ソフトで開くと

この通り
[f:id:alfe1025:20150227144811p:plain]
kmlファイルが出力されます

kmlはマークアップ言語の一種なので、使いたい部分を抜き出すようなパーサーを作れば、必要な情報だけ抜き出すことができます

xmlに変換するサービスもWeb上に転がっているので、xmlに慣れている人はそちらを使うのも良いかも 



ちなみに

rubyだとこんな感じで書くと、位置と名称が取り出せます

>|ruby|

#utf-8
require 'rexml/document'
doc = REXML::Document.new(open("nara2.kml"))
doc.elements.each('kml/Document/Folder/Placemark/')do |element|
  if(element.elements["Point/coordinates"])
    print element.elements["Point/coordinates"].text
  end
  print ", "
  puts element.elements["name"].text
end
||<
