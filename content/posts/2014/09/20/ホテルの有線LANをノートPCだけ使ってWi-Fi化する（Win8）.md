---
Title: ホテルの有線LANをノートPCだけ使ってWi-Fi化する（Win8）
Category:
- LifeHack
Date: 2014-09-20T09:41:46+09:00
---

[f:id:alfe1025:20140919144517j:plain]

沖縄のホテルなう。  
前日の準備中、ホテルに有線LANしかない疑惑が出たので
ホテル用の小型ルーターの代用をノートPCでできないか調べてみました  
思ったより簡単だったよ


<!-- more -->



[Win]+[x] を押して、[コマンドプロンプト（管理者）（A)]を選択  

下の4行をコピペする  
> netsh wlan set hostednetwork mode=allow  
> netsh wlan set hostednetwork ssid=Nekomimi  
> netsh wlan set hostednetwork key=nyannyan keyusage=persistent  
> netsh wlan start hostednetwork  

ssidは接続名、keyはWi-fiにつなぐときのパスワードになるので  
好みの設定に変更してください

設定が完了すれば次回からは  

> netsh wlan start hostednetwork　　

だけでWi-fiのアクセスポイントが起動します  
停止したいときは  

> netsh wlan set hostednetwork mode=disallow  

と入力すればOK  

実際に到着してみたら、ホテルの提供するWi-fiがバシバシ飛んでたというオチ  
ありがたいです
