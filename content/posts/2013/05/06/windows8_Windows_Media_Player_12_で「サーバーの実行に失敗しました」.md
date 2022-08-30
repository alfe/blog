---
Title: windows8 Windows Media Player 12 で「サーバーの実行に失敗しました」
Category:
- プログラム
Date: 2013-05-06T11:55:21+09:00
URL: https://blog.alfebelow.com/entry/2013/05/06/windows8_Windows_Media_Player_12_%E3%81%A7%E3%80%8C%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%81%AE%E5%AE%9F%E8%A1%8C%E3%81%AB%E5%A4%B1%E6%95%97%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%E3%80%8D
---




Windows8 で WMPをクリックしても起動しなくなった。
アイコンをクリックしても、スルーされているような感じ。
音楽ファイルをWMP指定で起動すると、
「サーバーの実行に失敗しました」とエラーが出た。

いろいろやってみたら解決したので、書いておく。

コマンドプロンプトを管理者権限で起動 
　(windows8なら、 [win]+[x] -> [a])

以下の2行を実行
regsvr32 jscript.dll
regsvr32 vbscript.dll

これでWMPが起動した。

参考：http://arxitecton.wordpress.com/2012/03/21/%E3%80%90%E5%82%99%E5%BF%98%E9%8C%B2%EF%BC%9Apc%E3%83%BB%E3%82%BD%E3%83%95%E3%83%88%E3%80%91%E3%80%80windows-media-player-12-%E3%81%A7%E3%80%8C%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%81%AE%E5%AE%9F/

コントロールパネルの「プログラムと起動」から
「Windowsの機能の有効化または無効化」を開いて
メディア機能を、無効→再起動→有効→再起動 とかもしてみたが特に変わらなかった。
他のエラーのときだとうまくいくのかも。
