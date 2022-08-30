---
Title: Google Maps APIをつかって、一番簡単なストリートビューをつくる(v3・JS)
Category:
- プログラム
Date: 2015-11-07T10:44:34+09:00
URL: https://blog.alfebelow.com/entry/2015/11/07/Google_Maps_API%E3%82%92%E3%81%A4%E3%81%8B%E3%81%A3%E3%81%A6%E3%80%81%E4%B8%80%E7%95%AA%E7%B0%A1%E5%8D%98%E3%81%AA%E3%82%B9%E3%83%88%E3%83%AA%E3%83%BC%E3%83%88%E3%83%93%E3%83%A5%E3%83%BC%E3%82%92%E3%81%A4
---

基本形はかなり簡単だよ、という記事

[f:id:alfe1025:20151107104355p:plain]


>|javascript|
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Street View</title>
    <style>
      html, body {
        height: 100%;
        margin: 0;  padding: 0;
      }
      #streetview {
        height: 100%;
      }
    </style>
    <script async src="https://maps.googleapis.com/maps/api/js?callback=initialize&v=3.exp"></script>	
    <script>
var panorama;
function initialize() {
  panorama = new google.maps.StreetViewPanorama(
      document.getElementById('streetview'),
      {
        position: {
          lat: 34.6899593, //緯度
          lng: 135.8538238 //経度
        },
        pov: {
          heading: -90, //見る方角 +が時計回り、-が反時計回り
          pitch: 0 //数字を大きくすると上を向く
        },
        zoom: 1 //ズームのレベル 1以上推奨
      });
}
    </script>
  </head>
  <body>
    <div id="streetview"></div>
  </body>
</html>
||<


上のソースコードをコピペして、streetview.htmlとでも名前を付けて、ブラウザで開けば動く。

細かな解説はコード内に記述しているけれども、
>|javascript|
position: {
          lat: 34.6899593, //緯度
          lng: 135.8538238 //経度
        },
||<

この部分を好きな場所の緯度経度に変えてやると、好きな場所でのストリートビューが作れます
簡単でしょ？
