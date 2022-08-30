---
Title: ローカルホストでPHPを動かす一番簡単な方法
Category:
- プログラム
Date: 2013-10-29T12:04:16+09:00
URL: https://blog.alfebelow.com/entry/2013/10/29/%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%83%9B%E3%82%B9%E3%83%88%E3%81%A7PHP%E3%82%92%E5%8B%95%E3%81%8B%E3%81%99%E4%B8%80%E7%95%AA%E7%B0%A1%E5%8D%98%E3%81%AA%E6%96%B9%E6%B3%95
---


PHPだけインストールしてローカル環境を整えよう、みたいな覚書記事です。
Apacheとか使いません。PHPだけしか使わないので、一番簡単であろうはず。


１、Microsoft Web Platform Installer（以下、Web PI）をダウンロードしてきます。
http://www.microsoft.com/web/downloads/platform.aspx

２、Web PI の検索窓に 「php」と入力して、新しそうなphpを「追加」します。
php5.x.x を「追加」すると、他に必要なものも勝手に追加されるみたいです。
[f:id:alfe1025:20131029120128p:plain]

３、「インストール」→「同意」 と、
順にクリックしていきインストールを完了します。

４、コマンドプロンプトを開き、
>|
php -v
|<
と入力して、phpがインストールされたか確認します。

PHP 5.4.14 (cli) (built: Apr 10 2013 21:19:30)
Copyright (c) 1997-2013 The PHP Group
Zend Engine v2.4.0, Copyright (c) 1998-2013 Zend Technologies
みたいなのがでたら、インストールが無事に終えてます。

５、コマンドプロンプトに
>|
php -S localhost:8080 -t .
|<
と、打ち込みます。

６、ブラウザに localhost:8080 と打ち込むと、
コマンドプロンプトのカレントディレクトリにあるphpファイルが参照できるようになります。
デスクトップのphpファイルを開きたい場合は、
>|
php -S localhost:8080 -t c:\Users\(user名)\Desktop
|<
と打ち込んでみてください。


Apacheなくても、phpだけでローカル環境作れますよ。という内容でした。
