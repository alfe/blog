---
Title: OBSでDiscordのアイコンを四角や横並びにするジェネレーター
Category:
- プログラム
Date: 2022-03-20T19:00:00+09:00
IMAGE: /img/2022/03/20/20220320164720.png
---

Among us実況とかで雑談配信とかで、四角いDiscordのアイコンが横並びでぴょこぴょことよく動くのを見かけます。

その見た目を自分好みに設定できるように「[OBSのDiscordアイコン外観変更ジェネレーター](https://obs-discord-icon.alfebelow.com/)」をつくりました。

[https://obs-discord-icon.alfebelow.com/](https://obs-discord-icon.alfebelow.com/)


### 何ができるの？
<ul>
<li>アイコンを横並びにしたり</li>
<li>アイコンのサイズを変えたり</li>
<li>アイコンの形を四角くしたり角を丸くしたり</li>
<li>アイコンをぴょこぴょこさせたり、点滅させたり</li>
<li>ぴょこぴょこする速さを変えたり</li>
<li>名前の位置を調整したり</li>
<li>名前を文字だけにしたり縁取りに変えたり</li>
</ul>

といった調整を、見た目を確認しながら変更できます。

そして、変更後の見た目をOBSに反映するカスタムCSSが出力されます。

![img](/img/2022/03/20/20220320164720.png)

### 導入方法

ジェネレータにも使い方説明が出てくるボタンを用意してますが一応こちらでも説明。


##### 1. OBSのソースにブラウザを追加
OBSを起動、OBSのシーンを選択後、「ソース」欄で右クリックしてブラウザを追加

![img](/img/2022/03/20/1_add_browser.png)

##### 2. Discord を起動
起動していない場合は起動してください


##### 3. Discord StreamKit Overlay にアクセス

[Discord StreamKit Overlay](https://streamkit.discord.com/overlay) にアクセス

![img](/img/2022/03/20/2_Discord-StreamKit-Overlay.png)

##### 4. ボイスウィジェットのURLを取得

「Install for OBS」をクリックし、「VOICE WIDGET」のタブを選択


「Server」と「Voice Channel」からボイスチャンネルを選択


右下に表示されるURLをコピー

![img](/img/2022/03/20/discord-url.png)

##### 5. OBSにURLを入力
OBSに戻り、中央にあるURLの入力欄に 3. でコピーしたURLを貼り付け

![img](/img/2022/03/20/1_obs_empty.png)

##### 6. カスタムCSSを作成
[OBSのDiscordアイコン外観変更ジェネレーター](https://obs-discord-icon.alfebelow.com/)で好みの見た目を決めたあと、下に表示されるCSSをコピー

![img](/img/2022/03/20/copy-css.png)

##### 7. OBSにカスタムCSSを入力
OBSに戻り、URLの少し下にあるカスタムCSSの入力欄に 5. でコピーしたカスタムCSSを貼り付け

![img](/img/2022/03/20/obs-css.png)

##### 8. 作成完了
ダイアログをOKで閉じて完了。OBSに話している人が表示されます。

![img](/img/2022/03/20/obs-complete.png)
 

### Q＆A

#### Q. なんでつくったの？


自分が欲しかったので。


CSSの微調整するときにOBS上でやるの大変なので、ブラウザで調整してからOBSに持っていきたかったんです。


ブラウザで調整するならいっそのことジェネレータにしてしまおうかと。


配信はしてないけれども、身内でAmongusするときにDiscordのライブ配信用に使ってます。


#### Q. 設定方法がいまいちわからない


設定方法自体は「OBS Discord アイコン 四角」とかでググるとたくさん出てくるので、わかりやすいのを探してください。


カスタムCSSをうまいこと作るジェネレーターを作っただけなので、OBSそのものの質問とか来るとつらい。


#### Q. こういうのも設定できるようにしてほしい


GitHubがわかる方はレポジトリ([https://github.com/alfe/obs-discord-icons-css-generator](https://github.com/alfe/obs-discord-icons-css-generator))にIssueやプルリクエストを投げてください。


ついでにスターも押してくれると嬉しいです。


GitHubわからないひとは、Twitterにリプとか投げてもらえると。実装できそう＋やる気があるときに機能追加するかもしれません。


 


以上、OBSのDiscordアイコン外観変更ジェネレーターの紹介でした。


 


 

