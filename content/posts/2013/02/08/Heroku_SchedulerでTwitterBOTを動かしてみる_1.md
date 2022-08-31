---
Title: Heroku SchedulerでTwitterBOTを動かしてみる
Category:
- プログラム
Date: 2013-02-08T13:48:08+09:00
---



Herokuってチョウカンタンデスヨ。
という文言を入れとかないと、Herokuについて書いちゃいけない気がしたので、
とりあえず書いておいてからスタート。


Herokuを使って1日1回名言をツイートするTwitter Botの作り方(http://blog.ruedap.com/entry/20110209/ruby_heroku_twitter_bot)を読みながらTwitterBOTを作っていたら、いろいろ引っかかったのでメモしておきます。

主に何に引っかかったかというと、Herokuから「cron」が廃止されて、「scheduler」が導入されているということ。より便利に使いやすくなったのですが、ちょっととまどったのでその辺を書きます。

1. Heroku環境の構築
上のリンク(Herokuを使って1日1回名言をツイートするTwitter Botの作り方)を参照

2. プログラム作成
今回はpso2向け緊急告知TwitterBOT(http://alfe.hateblo.jp/entry/2012/10/05/212150)を使った

3. 初期化
プログラムのあるローカルフォルダ内で
>||
$ git init
$ heroku create [appname]
||<

4. Gemfileを作る
>||
# Gemfile
source :rubygems
gem 'twitter'
||<
「Gemfile」(拡張子なし)をプログラムのあるローカルフォルダに入れる
Gemfileとは、プログラムに必要なgemファイル一覧だと思ってもらえれば。

5. ファイルをHerokuに突っ込む
プログラムのあるローカルフォルダ内で
>||
$ git add .
$ git commit -m "tekitou"
$ git push heroku master
||<
これで、ローカルフォルダの中身がHerokuに突っ込まれます。

6. Schedulerを使う
HerokuのWebページ(http://www.heroku.com/)にログインして、設定中のアプリを選択
[+]Get Add-ons のボタンから「Heroku Scheduler 」を選択します。
「select an app ..」のプルダウンをクリックして、設定中のアプリを選択。
「Add Standerd For Free」のボタンを押すと、Schedulerが使えるようになります。

もしくはプログラムのあるローカルファイル上で
>||
$ heroku addons:add scheduler:standard
||<
これでもSchedulerが使えるようになります。


アプリのページに戻り、Add-onsに「Heroku Scheduler Standard」が追加されているのを確認して、追加されたものをクリック

Heroku Schedulerの編集画面が開くので、
「Add Job..」のボタンを押して、$ の横に、実行したい「コマンド」を入力します
たとえば、「ruby ./pso2ship9bot.rb」みたいな感じで
そして、右側にあるFREQUENCY(実行間隔)などを設定、「save」ボタンを押すと完了です。

7. 確認
これで数時間動かしてみて、
うまく動かないようなら
>||
heroku ps
||<
や
>||
heroku logs
||<
で動作状況を確認すると良いかと。

ひとまずそんな感じです



author:<a href="https://plus.google.com/104298697221719052044?rel=author">alfe_below</a>
