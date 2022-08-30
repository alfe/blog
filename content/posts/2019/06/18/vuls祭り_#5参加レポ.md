---
Title: 'vuls祭り #5参加レポ'
Category:
- レビュー
Date: 2019-06-18T23:18:57+09:00
URL: https://blog.alfebelow.com/entry/2019/06/18/vuls%E7%A5%AD%E3%82%8A_%235%E5%8F%82%E5%8A%A0%E3%83%AC%E3%83%9D
---

<span itemtype="http://schema.org/Photograph" itemscope="itemscope"><img class="magnifiable" src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20010502/20010502144030.jpg" itemprop="image"></span>


もう第5回になるというVuls祭り  
OSSで公開されている、サーバの脆弱性をスキャンするVulsのLTや最新版情報などが公開されるイベントです



<!-- more -->



2019年6月17日。場所は六本木のDMM。  
第3回もDMMでしたね。



<span itemtype="http://schema.org/Photograph" itemscope="itemscope"><img class="magnifiable" src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20010502/20010502144040.jpg" itemprop="image"></span>
ご飯はまい泉バーガー



<span itemtype="http://schema.org/Photograph" itemscope="itemscope"><img class="magnifiable" src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20010502/20010502144050.jpg" itemprop="image"></span>

おいしかったです


## 招待講演 IPAテクニカルウォッチ「脆弱性対策の効果的な進め方」


<span itemtype="http://schema.org/Photograph" itemscope="itemscope"><img class="magnifiable" src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20010502/20010502144100.jpg" itemprop="image"></span>


とうとう国の人が出てきました。  
IPA、基本情報技術者試験とかやってる機構ですね。

で、そのIPAがVulsの解説冊子の製作者がプレゼン。  
冊子はこちら（https://www.ipa.go.jp/security/technicalwatch/20190221.html）から閲覧できます。

脆弱性の対策がなぜ必要か、から始まって  
脆弱性対策の進め方のステップについて解説。

そして手動で脆弱性情報を取っていくのは難しいので  
自動化するツールを入れていこう、ただツールにもできないこともあるので限界を知っておこう  
というまとめ。


<span itemtype="http://schema.org/Photograph" itemscope="itemscope"><img class="magnifiable" src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20010502/20010502144110.jpg" itemprop="image"></span>

見たことあるおじさんイラストが出てきて、「おぉ、IPAだ」って変なところで感動した。


## 乾杯

<span itemtype="http://schema.org/Photograph" itemscope="itemscope"><img class="magnifiable" src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20010502/20010502144120.jpg" itemprop="image"></span>



## 基調講演

<span itemtype="http://schema.org/Photograph" itemscope="itemscope"><img class="magnifiable" src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20010502/20010502144130.jpg" itemprop="image"></span>

* 使ってる人ロゴをvuls.ioにのせてね

### Vuls概要

* 自分のサーバに関係のある脆弱性だけ取れるのがVulsのいいところ
* OVALが検知の肝
* 攻撃コードも公開されているかわかる
* wordpressも検知できるようになった(versionv0.7.0)

### 基調講演中にv0.8.0リリース
OSSのリリース手順をリアルタイムで  
といってもタグ打つだけ  

こうやってリリースしてるんだなぁ

v0.8.0でできるようになったこととして

* コンテナのイメージスキャンができるようになった
* かしこいライブラリのスキャンができるようになった
* 動かす前のコンテナをスキャンできる
* OVALのレポートが一瞬になった
* AmazonのOVALスキャンができるようになった
* RHEL8に対応した

[https://twitter.com/vuls_en/status/1140795510950772736:embed]



# スポンサーLT

<span itemtype="http://schema.org/Photograph" itemscope="itemscope"><img class="magnifiable" src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20010502/20010502144140.jpg" itemprop="image"></span>
ビアスポンサー


<span itemtype="http://schema.org/Photograph" itemscope="itemscope"><img class="magnifiable" src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20010502/20010502144150.jpg" itemprop="image"></span>
会場スポンサー  
DMMはOSSを支援するぞ！ とのこと。期待。


開発環境LT  
さくらインターネットつかってOSのバージョン違いのデバックだけでなく  
開発もVSCode Remoteつかってクラウド上でできるようになったよ  

最近出てきたVSCodeRemoteをさくら使ってやるとすごく快適だぞ、って話

なぜかスポンサーLTで時間が押す

## Dockle

元記事  
[https://qiita.com/tomoyamachi/items/2397457f5d516a1fbc85:embed:cite]


コンテナを使うこと増えてるが、セキュリティインシデントも増えている  
Buildと実行環境が別だとイメージスキャンがしたくなる  

そこで、Dockle（https://github.com/goodwithtech/dockle）  
イメージに含まれるセキュリティホールチェックできる

自分でBuildしたイメージにパスワードのないユーザがいないか、とか  
環境ファイルにMySQLのパスが書いてないか、とか
そういうのがチェックできる

スターつけてほしい  
[https://github.com/goodwithtech/dockle:embed:cite]


そしてTrivyをつかうと  
元のイメージに含まれる脆弱性もチェックできる  
Vulsみたいに自分のコンテナに含まれる脆弱性をとれる  

[https://github.com/knqyf263/trivy:embed:cite]

コンテナも脆弱性チェックしていける



## Wordpressの脆弱性を Vulsで検知できるように！

[https://speakerdeck.com/rvirus0817/wordpressfalsecui-ruo-xing-wo-vulsdejian-zhi-dekiruyouni:embed:cite]


2016年から脆弱性がめっちゃ増えてる  
そして Wordpressも毎度多い


<span itemtype="http://schema.org/Photograph" itemscope="itemscope"><img class="magnifiable" src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20010502/20010502144200.jpg" itemprop="image"></span>
vulsのv0.7.0からコア・テーマ・プラグインに対して脆弱性がないかチェックできるようになった  
バーチャルホストでもいける。  
Vulsのバリューがさらに上がった。

今回はWordpressスキャンのデモ を試して、エラーが出て終わってしまった。残念。

## プロダクトセキュリティチーム立上げにおけるVulsの活用

[https://speakerdeck.com/okuken/using-vuls-in-product-security-team:embed:cite]

ブライダル業界でNo1の技術者集団になる、と意気込む会社のvulsの導入経緯の話

セキュリティどこから始めれば・・・という人の参考になりそう

## 脆弱性トリアージの考え方

脆弱性全部の対策はできないのだから、トリアージを行ってリスクに見合った対策が大事  
対応する/しないの検討基準とどれに対処するのか検討する基準をどう決めていこうかという話

## Vulsを用いた脆弱性スキャンと自動適用の提案

テストとかが整っていれば脆弱性発見→自動アップデートができるのでは？と試した話  
まだWIPとのこと

（この辺から画面がおかしくうなる）

## Vulsクラウドサービスのご提案

[https://vuls.biz:embed:cite]

有償版Vuls、FutureVulsの宣伝  

脆弱性対策をチームでやろうとすると    
誰がどこまでやったのか、放置されている脆弱性がないか見つけるのが大変  

有償版だと、脆弱性が見つかると同時にチケット化されるので、ステータス管理や情報の記録が楽  
AWSの設定をすると、ブラウザ上からSSM経由でソフトウェアのアップデートができるよ  
とりあえず使ってみて、という話

話している途中からモニタが消え始め、アタックチャンスみたいになった

## China Vuls

[https://www.slideshare.net/jkudo/vuls5:embed:cite]


ChinaでVulsスキャンしてみるとグレートファイアウォールがつらいぞ、という話  
すごくつらそう。。。


<span itemtype="http://schema.org/Photograph" itemscope="itemscope"><img class="magnifiable" src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20010502/20010502144210.jpg" itemprop="image"></span>
アタックチャンスも継続

## クロージング

記念撮影の写真がそのうちどこかに上がるはず。

# 以上、レポでした

お疲れ様でした！！！

