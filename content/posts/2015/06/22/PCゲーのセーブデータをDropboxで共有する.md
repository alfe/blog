---
Title: PCゲーのセーブデータをDropboxで共有する
Category:
- LifeHack
Date: 2015-06-22T11:44:46+09:00
---


<br />PCゲームのセーブデータをショートカット的なやつ を使って複数のPCで共有します。

![img](https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20150620/20150620125500.jpg)

<br />しかし、普通のショートカットだと、ゲームのセーブデータのようなプログラムから読み込むファイルはうまく動作してくれないのです。

きちんと「save」というあらかじめ決められたフォルダの中にセーブデータが入ってないといけないのですね。<br /><br />で、どうするか。<br />シンボリックリンクという技を使います<br /><br />シンボリックリンクというのは、ファイルの位置情報を保管してファイル本体への接続を行うファイルのこと。<br />と文字で説明してもよくわからないと思うので、これからやることのイメージを図示しておきます。

<img title="f:id:alfe1025:20150622113921g:plain" src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20150622/20150622113921.gif" alt="f:id:alfe1025:20150622113921g:plain" />

<br />シンボリックリンクのすごいところは、Dropboxのなかにあるデータを、あたかも「save」フォルダの中にあるように勘違いさせることができるのです。<br /><br />すごい<br /><br /><br />で、そのシンボリックリンクの作り方。<br />コマンドうてる人は、カレントディレクトリ内で、下のような感じで実行してください。
<blockquote>

ln 　-s c://xxx/Dropbox/save.save
</blockquote>

 

上のコマンドがよくわからん！ってひとは、 Link Shell Extensionというソフトを使うと便利。<br /><a href="https://www.gigafree.net/system/explorer/hardlinkshellextension.html" target="_blank" rel="nofollow">https://www.gigafree.net/system/explorer/hardlinkshellextension.html</a><br />（「Visual C++ 2005 SP1 ランタイム」 が必要）<br /><br />Link Shell Extensionをインストールすると、フォルダの右クリックメニューに「リンク元として選択」というのがでてくるので、<br />ゲームのセーブデータフォルダをDropboxに移動→セーブデータフォルダを「リンク元として選択」→もともとセーブデータフォルダがあった場所で右クリック→「リンクを作成」→「シンボリックリンク」<br />としてやればOK<br /><br />つまり、Dropboxにセーブデータを移動して、右クリックして

<img title="f:id:alfe1025:20150622114006p:plain" src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20150622/20150622114006.png" alt="f:id:alfe1025:20150622114006p:plain" />

<br />セーブデータが元々あった場所でこんな感じにシンボリックリンクを作成すると、

<img title="f:id:alfe1025:20150622114059p:plain" src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20150622/20150622114059.png" alt="f:id:alfe1025:20150622114059p:plain" />

<br />セーブデータが共有される

<img title="f:id:alfe1025:20150622114136p:plain" src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20150622/20150622114136.png" alt="f:id:alfe1025:20150622114136p:plain" />

パッと見、普通のファイルっぽく見えます。

プロパティ開くと、違うものと分かります。<br /><br />これで、新幹線でもホテルでもゲームの続きができるね。やったね。<br /><br /><br /><br /><br /><br style="color: rgba(0, 0, 0, 0.8); font-family: 'Roboto Slab', 'Times New Roman', serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 19px; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff;" />
