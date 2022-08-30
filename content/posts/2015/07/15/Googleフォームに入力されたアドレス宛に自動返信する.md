---
Title: Googleフォームに入力されたアドレス宛に自動返信する
Category:
- プログラム
Date: 2015-07-15T17:17:25+09:00
URL: https://blog.alfebelow.com/entry/2015/07/15/Google%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%81%AB%E5%85%A5%E5%8A%9B%E3%81%95%E3%82%8C%E3%81%9F%E3%82%A2%E3%83%89%E3%83%AC%E3%82%B9%E5%AE%9B%E3%81%AB%E8%87%AA%E5%8B%95%E8%BF%94%E4%BF%A1%E3%81%99%E3%82%8B
---

<p> </p>
<p>Googleフォームにに申し込み欄つくって<br />「申し込みありがとうございましたー」みたいなメール返信する</p>
<p> </p>
<p><img class="hatena-fotolife" title="f:id:alfe1025:20150715171526p:plain" src="http://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20150715/20150715171526.png" alt="f:id:alfe1025:20150715171526p:plain" /></p>

### やりかた

<h5>１</h5>
<p>Googleフォームをつくる</p>
<h5>２</h5>
<p>[アイテムの追加]→[テキスト]から<br />「氏名」と「メールアドレス」の入力欄をつくる</p>
<h5>３</h5>
<p>[ツール]の[スクリプトエディタ]から[空のプロジェクト]をつくり<br />以下を貼付ける</p>
<p>function submitForm(e){<br /> var itemResponses = e.response.getItemResponses();<br /> var message = '';<br /> var username = '';<br /> var mail = '';<br /> for (var i = 0; i &lt; itemResponses.length; i++) {<br /> var itemResponse = itemResponses[i];<br /> var question = itemResponse.getItem().getTitle();<br /> var answer = itemResponse.getResponse();<br /> <br /> if (question == '氏名'){<br /> username = answer;<br /> }<br /> if (question == 'メールアドレス'){<br /> mail = answer;<br /> }<br /> message += (i + 1).toString() + '. ' + question + ' \n' + answer + '\n';<br /> }<br /> var address = username + 'さま'+'&lt;'+mail+'&gt;';<br /> var title = '申込み受付のお知らせ';<br /> var content = itemResponses[0].getResponse() + ' さま\n\n'<br /> + '今回は、XXXに申し込みいただきありがとうございます。\n\n'<br /> + '以下の内容で申し込みを受け付けました。\n' <br /> + message<br /> + 'あとはいろいろ好きな言葉をくっつける\n'<br /> + 'バックスラッシュとnで改行\n'<br /> + 'ーーーーーーーー\n'<br /> + '送信者の名前 mail@mail.com\n'<br /> + '最後の行にセミコロンをつける\n';</p>
<p>GmailApp.sendEmail(address, title, content);<br />}</p>
<p> </p>
<h5>４</h5>
<p>時計のマーク（現在のプロジェクトのトリガー）を押して<br />[新しいトリガーを追加]→[submitForm/フォームから/フォーム送信時]<br />認証のポップアップが出たら、OKを押していく</p>
<p> </p>
<h5>５</h5>
<p>フォーム作成画面に戻って、[実際のフォームを表示]から<br />実際に動かしてみよう。</p>
<p>入力されたデータは[回答を表示]から見ることができますよ</p>
<p> </p>
