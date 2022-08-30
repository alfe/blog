---
Title: 補足情報をjQueryを使って横とか下とかに うにゅっと出してみる。
Category:
- プログラム
Date: 2013-07-27T19:31:14+09:00
URL: https://blog.alfebelow.com/entry/2013/07/27/%E8%A3%9C%E8%B6%B3%E6%83%85%E5%A0%B1%E3%82%92jQuery%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E6%A8%AA%E3%81%A8%E3%81%8B%E4%B8%8B%E3%81%A8%E3%81%8B%E3%81%AB_%E3%81%86%E3%81%AB%E3%82%85%E3%81%A3%E3%81%A8%E5%87%BA
---



イメージとしては下の図のような感じ
[f:id:alfe1025:20130727192514j:plain,w250]

div1にメイン情報を載せて、div2にサブ情報を載せる感じで。
ボタンを押すと div2を出したり消したりできるようにしてみたかった。
下のコードをhtmlファイルとして作れば動くはず。

<b><span style="font-size: 150%">[http://alfe.wkeya.com/div_sub.html:title=デモ]</span></b>

div_sub.html
>|javascript|
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
  </head>
  <body>
    <div id="main_contents"></div>
    <div id="sub">
      <div id="sub_botton">
        <div id="left_botton" class="botton">⇒</div>
        <div id="bottom_botton" class="botton">↑</div>
      </div>
    <div>
  </body>
  <style type="text/css">
    html, body {
      margin: 0;
    }
    #main_contents {
      width: 440px;
      height: 600px;
      position: relative;
      border: none;
      background-color: #CCAA00
    }
    #sub {
      width: 160px;
      height: 600px;
      position: absolute;
      top:  0px;
      left: 440px;
      background-color: #99cc00
    }

    #sub_botton {
      width:  90px;
      height: 24px;
      position: absolute;
      bottom:  0px;
      right: 0px;
    }
    
    .botton {
      font-size:10px;
      font-family:Comic Sans MS;
      font-weight:normal;
      -moz-border-radius:8px;
      -webkit-border-radius:8px;
      border-radius:8px;
      border:1px solid #d02718;
      padding:9px 18px;
      text-decoration:none;
      float:left;
      background:-webkit-gradient( linear, left top, left bottom, color-stop(5%, #f24537), color-stop(100%, #c62d1f) );
      background:-moz-linear-gradient( center top, #f24537 5%, #c62d1f 100% );
      background:-ms-linear-gradient( top, #f24537 5%, #c62d1f 100% );
      filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f24537', endColorstr='#c62d1f');
      background-color:#f24537;
      color:#ffffff;
      display:inline-block;
      text-shadow:1px 1px 0px #810e05;
       -webkit-box-shadow: 1px 1px 0px 0px #f5978e;
       -moz-box-shadow: 1px 1px 0px 0px #f5978e;
       box-shadow: 1px 1px 0px 0px #f5978e;
    }.botton:hover {
      background:-webkit-gradient( linear, left top, left bottom, color-stop(5%, #c62d1f), color-stop(100%, #f24537) );
      background:-moz-linear-gradient( center top, #c62d1f 5%, #f24537 100% );
      background:-ms-linear-gradient( top, #c62d1f 5%, #f24537 100% );
      filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#c62d1f', endColorstr='#f24537');
      background-color:#c62d1f;
    }.botton:active {
      position:relative;
      top:1px;
    }
  </style>
  
  <script type="text/javascript" code="subs_code">
// *********** subを動かすjquery*******
  $(function(){
    $("#left_botton").click(function(){
       if($("#sub").width() == 160){
         // close sub
         $("#main_contents").width(600).css({cursor:"auto"});
         $("#main_contents").height(600).css({cursor:"auto"});
         $("#sub").css({top:"600px", left:"600px"});
         $("#sub").width(0).css({cursor:"auto"});
         $("#sub").height(0).css({cursor:"auto"});
         $("#bottom_botton").text("↑");
         $("#left_botton").text("←");
       }else{
         // open sub
         $("#main_contents").width(440).css({cursor:"auto"});
         $("#main_contents").height(600).css({cursor:"auto"});
         $("#sub").css({top:"0px", left:"440px"});
        $("#sub").width(160).css({cursor:"auto"});
        $("#sub").height(600).css({cursor:"auto"});
        $("#bottom_botton").text("↑");
         $("#left_botton").text("⇒");

      }
    });
    $("#bottom_botton").click(function(){
       if($("#sub").height() == 160){
         // close sub
         $("#main_contents").width(600).css({cursor:"auto"});
         $("#main_contents").height(600).css({cursor:"auto"});
         $("#sub").css({top:"600px", left:"600px"});
         $("#sub").width(0).css({cursor:"auto"});
         $("#sub").height(0).css({cursor:"auto"});
         $("#bottom_botton").text("↑");
         $("#left_botton").text("←");
       }else{
         // open sub
         $("#main_contents").width(600).css({cursor:"auto"});
         $("#main_contents").height(440).css({cursor:"auto"});
        $("#sub").css({top:"440px", left:"0px"});
        $("#sub").width(600).css({cursor:"auto"});
        $("#sub").height(160).css({cursor:"auto"});
        $("#bottom_botton").text("↓");
         $("#left_botton").text("←");

      }
    });
  });
  </script>
</html>
||<


.botton の設定はジェネレータから。
初めはsubの有無を変数で管理しようと思っていたが、
jQueryの変数でフラグ管理するのは、なかなか厄介そうだなと思い、
divのサイズをflag変数代わりに用いてます。
きっとうまいやり方がほかにもあるはず。


使い方としては、googleストリートビューをdiv1に乗せて、地図をdiv2に載せてみるとか。
div1に全体写真、div2に拡大写真を貼り付けてみるとか
