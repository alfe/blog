---
Title: Googleフォームに入力されたアドレス宛に自動返信する
Category:
- プログラム
Date: 2015-07-15T17:17:25+09:00
---


 

Googleフォームにに申し込み欄つくって<br />「申し込みありがとうございましたー」みたいなメール返信する

 

<img class="hatena-fotolife" title="f:id:alfe1025:20150715171526p:plain" src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20150715/20150715171526.png" alt="f:id:alfe1025:20150715171526p:plain" />

### やりかた

<h5>１</h5>

Googleフォームをつくる
<h5>２</h5>

[アイテムの追加]→[テキスト]から<br />「氏名」と「メールアドレス」の入力欄をつくる
<h5>３</h5>

[ツール]の[スクリプトエディタ]から[空のプロジェクト]をつくり<br />以下を貼付ける

function submitForm(e){<br /> var itemResponses = e.response.getItemResponses();<br /> var message = '';<br /> var username = '';<br /> var mail = '';<br /> for (var i = 0; i &lt; itemResponses.length; i++) {<br /> var itemResponse = itemResponses[i];<br /> var question = itemResponse.getItem().getTitle();<br /> var answer = itemResponse.getResponse();<br /> <br /> if (question == '氏名'){<br /> username = answer;<br /> }<br /> if (question == 'メールアドレス'){<br /> mail = answer;<br /> }<br /> message += (i + 1).toString() + '. ' + question + ' \n' + answer + '\n';<br /> }<br /> var address = username + 'さま'+'&lt;'+mail+'&gt;';<br /> var title = '申込み受付のお知らせ';<br /> var content = itemResponses[0].getResponse() + ' さま\n\n'<br /> + '今回は、XXXに申し込みいただきありがとうございます。\n\n'<br /> + '以下の内容で申し込みを受け付けました。\n' <br /> + message<br /> + 'あとはいろいろ好きな言葉をくっつける\n'<br /> + 'バックスラッシュとnで改行\n'<br /> + 'ーーーーーーーー\n'<br /> + '送信者の名前 mail@mail.com\n'<br /> + '最後の行にセミコロンをつける\n';

GmailApp.sendEmail(address, title, content);<br />}

 
<h5>４</h5>

時計のマーク（現在のプロジェクトのトリガー）を押して<br />[新しいトリガーを追加]→[submitForm/フォームから/フォーム送信時]<br />認証のポップアップが出たら、OKを押していく

 
<h5>５</h5>

フォーム作成画面に戻って、[実際のフォームを表示]から<br />実際に動かしてみよう。

入力されたデータは[回答を表示]から見ることができますよ

 
