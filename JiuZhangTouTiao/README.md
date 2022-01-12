## 九张投条

## 抓包
抓取连接： https://api.st615.com/v1/user/info?token=XXXXX
九章链接随便一个链接都有token 
## 青龙使用 
定时corn : 15 0,6-23 * * * (1小时运行一次)

#### 脚本拉取：
```
#ql raw https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/JiuZhangTouTiao/jzread.js //不能用了
ql raw https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/JiuZhangTouTiao/leafxcy-jztt.js
```
#### 变量参数：
```
#export jzreadurl='https://api.st615.com/v1/user/info?token=XXX@https://api.st615.com/v1/user/info?token=XXX'
#面额为0.3 2 5 30 50 100
#export cashtx=''
# 2022新参数 ：
export jzttToken='token@token@token'
export jzttWithdrawLimit='5' //默认为5，填5就不会提现大于5的金额 按门槛自动提现，从大到小，默认顺序5元，2元和0.3元
```

## 下载 
APP STORE： 九章头条
安卓各大商场自行下载，未测试
## 黑号处理
1.九章头条黑号秽土转生：用接码平台 米云(http://h5.miyun.pro/zc.html?inviteCode=33374) 
2.接码注册九章，然后绑定黑号的微信即可
## 来源
https://github.com/leafxcy/JavaScript/blob/main/jztt.js (最新可用 2022-01-11)

https://github.com/xl2101200/-/blob/main/jztt.js
微信公众号柠檬玩机交流
