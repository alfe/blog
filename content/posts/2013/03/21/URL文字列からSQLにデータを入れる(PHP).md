---
Title: URL文字列からSQLにデータを入れる(PHP)
Category:
- プログラム
Date: 2013-03-21T18:04:06+09:00
---



ｈttp://kamigami/insert.php?myname=watasida&yourname=omaedattanoka 
みたいなURLから、mynameとyournameの値を取ってSQLに入れようみたいな記事。
研究室のサーバー上にあるSQLにアクセスするために書いた。
mynameとyournameは文字列を想定してます。

>|php|
<html>
<head><title>PHP TEST</title></head>
<body>

<?php
$conn = "host=localhost dbname=alfe user=alfe password=alfepass";
$link = pg_connect($conn);
if (!$link) {
    die('接続失敗'.pg_last_error());
}
$myname = $_GET["myname"];
$yourname = $_GET["yourname"];

print('接続に成功しました。<br>');
pg_set_client_encoding("utf-8");
print('データ追加<br><br>');
$sql = "INSERT INTO kamigami (myname, yourname) VALUES ('".$myname."','".$yourname."');";
$result_flag = pg_query($sql);
if (!$result_flag) {
    die('INSERTクエリー失敗'.pg_last_error());
}
$close_flag = pg_close($link);
if ($close_flag){
    print('切断<br>');
}

?>
</body>
</html>
||<

挿入するデータが文字列以外の場合は
VALUES ('".$myname."','".$yourname."');";
を
VALUES (".$myname.",".$yourname.");";
のように、'を外してやると良いと思います。
