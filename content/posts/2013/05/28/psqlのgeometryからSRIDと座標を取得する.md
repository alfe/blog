---
Title: psqlのgeometryからSRIDと座標を取得する
Category:
- プログラム
Date: 2013-05-28T10:56:26+09:00
---



ことあるごとに忘れるのでメモ
geometry型の"latlng"が、どの地点を指しているのかを取り出す時のsqlコマンド


>|
psql=> select ST_AsEWKT(latlng) from points WHERE id= 'titen1';
|<

結果は

>|
               st_asewkt               
――――――――――――――――
 SRID=1000;POINT(34.7 135.4)
(1 row)
|<

みたいになる

ちなみに
>|
psql=> select SRID(latlng) from points WHERE id= 'titen1';
|<
とすると

>|
 srid
――――――――
 4301
(1 row)
|<
と、SRIDのみの表示もできる。

このSRIDはなにに使うものなのか、まだよくわかってない。


