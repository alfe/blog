---
Title: OBSでDiscordのアイコンを四角や横並びにするジェネレーター
Category:
- プログラム
Date: 2022-03-20T19:00:00+09:00
IMAGE: https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20220320/20220320164720.png
---

Among us実況とかで雑談配信とかで、四角いDiscordのアイコンが横並びでぴょこぴょことよく動くのを見かけます。

その見た目を自分好みに設定できるように「[OBSのDiscordアイコン外観変更ジェネレーター](https://obs-discord-icon.alfebelow.com/)」をつくりました。

<iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fobs-discord-icon.alfebelow.com%2F" title="OBSのDiscordアイコン外観変更ジェネレーター" class="embed-card embed-webcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: auto;"></iframe>


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


<img src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20220320/20220320164720.png" alt="f:id:alfe1025:20220320164720p:plain" width="1200" loading="lazy" title="" class="hatena-fotolife" itemprop="image" />

### 導入方法

ジェネレータにも使い方説明が出てくるボタンを用意してますが一応こちらでも説明。


##### 1. OBSのソースにブラウザを追加
OBSを起動、OBSのシーンを選択後、「ソース」欄で右クリックしてブラウザを追加

<div class="MuiBox-root css-xi606m" style="text-align: center; color: rgba(0, 0, 0, 0.87); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><img src="https://obs-discord-icon.alfebelow.com/assets/1_add_browser.b4336576.png" /></div>

##### 2. Discord を起動
起動していない場合は起動してください

<div class="MuiBox-root css-xi606m" style="text-align: center; color: rgba(0, 0, 0, 0.87); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"> </div>

##### 3. Discord StreamKit Overlay にアクセス


[https://streamkit.discord.com/overlay](https://streamkit.discord.com/overlay) にアクセス
<div class="MuiBox-root css-xi606m" style="text-align: center;"><img width="80%" src="https://obs-discord-icon.alfebelow.com/assets/2_Discord-StreamKit-Overlay.1be10a2f.png" style="border: 1px solid #1976d2; border-radius: 8px; margin: 1rem 0px;" /></div>

##### 4. ボイスウィジェットのURLを取得

「Install for OBS」をクリックし、「VOICE WIDGET」のタブを選択


「Server」と「Voice Channel」からボイスチャンネルを選択


右下に表示されるURLをコピー

<div class="MuiBox-root css-xi606m" style="text-align: center; color: rgba(0, 0, 0, 0.87); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><img width="80%" src="https://obs-discord-icon.alfebelow.com/assets/discord-url.0f1b9919.png" /></div>

##### 5. OBSにURLを入力
OBSに戻り、中央にあるURLの入力欄に 3. でコピーしたURLを貼り付け

<div class="MuiBox-root css-xi606m" style="text-align: center; color: rgba(0, 0, 0, 0.87); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><img width="80%" src="https://obs-discord-icon.alfebelow.com/assets/1_obs_empty.cfb78304.png" /></div>

##### 6. カスタムCSSを作成
<span style="font-weight: 400;"><a href="https://obs-discord-icon.alfebelow.com/">OBSのDiscordアイコン外観変更ジェネレーター</a> </span>で好みの見た目を決めたあと、下に表示されるCSSをコピー

<div class="MuiBox-root css-xi606m" style="text-align: center; color: rgba(0, 0, 0, 0.87); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><img width="80%" src="https://obs-discord-icon.alfebelow.com/assets/copy-css.d1fe68cb.png" /></div>

##### 7. OBSにカスタムCSSを入力
OBSに戻り、URLの少し下にあるカスタムCSSの入力欄に 5. でコピーしたカスタムCSSを貼り付け

<div class="MuiBox-root css-xi606m" style="text-align: center; color: rgba(0, 0, 0, 0.87); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><img width="80%" src="https://obs-discord-icon.alfebelow.com/assets/obs-css.3ec88a4a.png" /></div>

##### 8. 作成完了
ダイアログをOKで閉じて完了。OBSに話している人が表示されます。

<div class="MuiBox-root css-xi606m" style="text-align: center; color: rgba(0, 0, 0, 0.87); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><img width="80%" src="https://obs-discord-icon.alfebelow.com/assets/obs-complete.3113658d.png" /></div>
 

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


GitHubわかるひとはレポジトリ( <a href="https://github.com/alfe/obs-discord-icons-css-generator">https://github.com/alfe/obs-discord-icons-css-generator</a> )にIssueとかプルリクとか投げてください。


ついでにスターも押してくれると嬉しいです。


GitHubわからないひとは、Twitterにリプとか投げてもらえると。実装できそう＋やる気があるときに機能追加するかもしれません。


 


以上、OBSのDiscordアイコン外観変更ジェネレーターの紹介でした。


 


 

