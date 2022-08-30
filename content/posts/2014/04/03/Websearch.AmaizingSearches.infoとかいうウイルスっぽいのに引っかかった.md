---
Title: Websearch.AmaizingSearches.infoとかいうウイルスっぽいのに引っかかったので解決方法
Category:
- LifeHack
Date: 2014-04-03T06:19:19+09:00
URL: https://blog.alfebelow.com/entry/2014/04/03/Websearch.AmaizingSearches.info%E3%81%A8%E3%81%8B%E3%81%84%E3%81%86%E3%82%A6%E3%82%A4%E3%83%AB%E3%82%B9%E3%81%A3%E3%81%BD%E3%81%84%E3%81%AE%E3%81%AB%E5%BC%95%E3%81%A3%E3%81%8B%E3%81%8B%E3%81%A3%E3%81%9F
---


ちょっと怪しげなサイトからいろいろ(ファームウェアとか)インストールしたら、新しくブラウザを開いたときにこんな画面が出るようになってしまった。
<p><span itemscope itemtype="http://schema.org/Photograph"><img src="http://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20140403/20140403061600.png" alt="f:id:alfe1025:20140403061600p:plain" title="f:id:alfe1025:20140403061600p:plain" class="hatena-fotolife" itemprop="image"></span></p>


どうやらこのページがTOPページとして登録されてるっぽい。
http://websearch.amaizingsearches.info/

いかにも独自の検索エンジンっぽく見えるのに、中央の白い四角に文字入れて、「Serch」というボタン押すと、検索ワードがそのままGoogleに渡されるとかいうよくわかんない検索エンジン。

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="http://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20140403/20140403061729.png" alt="f:id:alfe1025:20140403061729p:plain" title="f:id:alfe1025:20140403061729p:plain" class="hatena-fotolife" itemprop="image"></span></p>
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
<p><span itemscope itemtype="http://schema.org/Photograph"><img src="http://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20140403/20140403061617.png" alt="f:id:alfe1025:20140403061617p:plain" title="f:id:alfe1025:20140403061617p:plain" class="hatena-fotolife" itemprop="image"></span></p>


これでChromeは元に戻ったはず。

###インターネットエクスプローラのリセット
インターネットエクスプローラ右上の歯車→インターネットオプション→[詳細設定]タブ と開いていき、「リセット(S)」ボタンを押します。

「個人情報を削除する」にチェックを入れてリセットすればOK  
履歴とか設定とかも消えてしまうので、そこは注意をお願いします。

###まとめ
Firefoxは使ってないのでわからないです。

あと「Websearch.amaizingsearches.info」で検索したら怪しげな日本語のサイトが、怪しげなウイルス駆除ソフトをインストールするよう勧めてたりして楽しい。
