# 近日偷条
**自定义农场和种树任务：现在默认不做，收益太低，需要做的，把变量jrttjsbFarm填为1
增加自定义每次运行阅读文章的数量：填到变量jrttjsbReadNum，不填默认10篇
自己修改jrttjsbReadNum之后可以灵活定时，群里有3分钟跑一次的，半天8000+阅读金币，不过我不建议哈**
## 青龙
#### 抓包（SSL破解）
url筛选
```
i.snssdk.com  #andorid
api3-normal-lq.toutiaoapi.com  #IOS
```
或者
```
page_data
```
请求中的 cookie放到jrttjsbHeader
请求中的 cookie放到jrttjsbUA
参数：
```
export jrttjsbHeader='cookie1@cookie2'
export rttjsbUA='ua1@ua2'
export jrttjsbReadNum='15'
export jrttjsbFarm='1'
```
#### 拉库
```
ql raw https://raw.githubusercontent.com/leafxcy/JavaScript/main/jrttjsb.js
```

## V2p
重写
```
#android
https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/JinRiTouTiao/jrttjsb-rewrite-android.json
#ios
https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/JinRiTouTiao/jrttjsb-rewrite-ios.json
```
定时任务
```
https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/JinRiTouTiao/jrttjsb_cron.json
```
