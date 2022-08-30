---
Title: React覚え書き
Category:
- プログラム
Date: 2016-04-13T06:52:29+09:00
URL: https://blog.alfebelow.com/entry/2016/04/13/React%E8%A6%9A%E3%81%88%E6%9B%B8%E3%81%8D
---

React勉強中
TwitterとかLINEとかみたいな、新しい情報が徐々に追加されるサービスに
有用そうなツールっぽい。

簡単なサンプルコードを置いておく。
ul ← li ← 配列の中身 と入れていくのをプログラムで書ける。

>||
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8" />
	<title>React test</title>
</head>
<body>
	<div id="react"></div>
	
	<script src="https://cdn.jsdelivr.net/react/0.14.0-rc1/react.js"></script>
	
	<script src="https://cdn.jsdelivr.net/react/0.14.0-rc1/react-dom.js"></script>
	<script>
	var contacts = [
	{key:1, name: "Twitter", link: "https://twitter.com/"},
	{key:2, name: "Facebook", link: "https://ja-jp.facebook.com/"}
	]

	var listElements = contacts
	//要素が足りないときに、はじく
	.filter(function(contact) { return contact.link; })
  //ここで書く
  .map(function(contact) {
  	return React.createElement('li', {key:contact.key},
  		React.createElement('p', {}, contact.name),
  		React.createElement('a', {href:contact.link}, contact.link)
  		)
  })

  var rootElement =
  React.createElement('div', {}, 
  	React.createElement('h1', {}, "リンク"),
    //listElements->createElementの順
    React.createElement('ul', {}, listElements)
  )

  ReactDOM.render(rootElement, document.getElementById('react'))
</script>
</body>
</html>


||<
