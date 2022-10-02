---
Title: Websearch.AmaizingSearches.infoとかいうウイルスっぽいのに引っかかったので解決方法
Category:
- LifeHack
Date: 2014-04-03T06:19:19+09:00
---


ちょっと怪しげなサイトからいろいろ(ファームウェアとか)インストールしたら、新しくブラウザを開いたときにこんな画面が出るようになってしまった。

<span ><img src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20140403/20140403061600.png" alt="f:id:alfe1025:20140403061600p:plain" title="f:id:alfe1025:20140403061600p:plain" class="hatena-fotolife" itemprop="image"></span>


どうやらこのページがTOPページとして登録されてるっぽい。
https://websearch.amaizingsearches.info/

いかにも独自の検索エンジンっぽく見えるのに、中央の白い四角に文字入れて、「Serch」というボタン押すと、検索ワードがそのままGoogleに渡されるとかいうよくわかんない検索エンジン。


<span ><img src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20140403/20140403061729.png" alt="f:id:alfe1025:20140403061729p:plain" title="f:id:alfe1025:20140403061729p:plain" class="hatena-fotolife" itemprop="image"></span>
ロゴもGoogleカラーで外枠だけ。なにをイメージしてるのか・・・？


早急に撤去しましょう！

##取り除き方
###アンインストール
「コントロール パネル」→「プログラム」→「プログラムと機能」から怪しげなソフトを抜きましょう。

今回は、

 - SNT
 - safeweb
 - YoutubeAdblocker

の３つをアンインストールしました。
動きが怪しくなった日付にインストールされてて、発行元がよくわからないものをアンインストールすればだいたいあってるはず。

###Chrome拡張機能
Chrome右上の「三」→ツール→拡張機能から

 - SNT
 - safeweb

を削除します。

<span ><img src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20140403/20140403061617.png" alt="f:id:alfe1025:20140403061617p:plain" title="f:id:alfe1025:20140403061617p:plain" class="hatena-fotolife" itemprop="image"></span>


これでChromeは元に戻ったはず。

###インターネットエクスプローラのリセット
インターネットエクスプローラ右上の歯車→インターネットオプション→[詳細設定]タブ と開いていき、「リセット(S)」ボタンを押します。

「個人情報を削除する」にチェックを入れてリセットすればOK  
履歴とか設定とかも消えてしまうので、そこは注意をお願いします。

###まとめ
Firefoxは使ってないのでわからないです。

あと「Websearch.amaizingsearches.info」で検索したら怪しげな日本語のサイトが、怪しげなウイルス駆除ソフトをインストールするよう勧めてたりして楽しい。
