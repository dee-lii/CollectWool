## 软件名称: **都爱玩** 
### 11.21更新说明

**现在需要充钱1块才能解锁分红池，自己考虑要不要充
支持苹果和安卓双端的任务，两边账户分红币独立，理论上收益可以翻倍，每天2块多到3块的样子，不过提现次数似乎两边共用
支持多账户，可以并发看视频广告，减少运行时间，V2P跑有时会有code=400错误信息，忽略就好
重写捉包只需要捉其中一端的账号即可，ck通用
脚本内置了自动提现，默认提现到微信
在【我的】页面可以花0.1购买普通会员，马上返1元可提现。会员每日可以积分兑换0.1-0.2的红包，聊胜于无吧，建议购买
建议每天多跑几次，池子有额度就能投进去分红**

#### 签到，转盘抽奖获得积分，转盘游戏，看广告获得分红币,分红模式,不需要实名 ---目前提现秒到


**脚本下载：**  
```
ql raw https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/DouAiWan/daw.js
```

#### 青龙必要变量:  
#抓包头：https://v3.sdk.haowusong.com/api/box/wallet/info  链接里的token  //已失效
捉取https://v3.sdk.haowusong.com/api/box/wallet/info的包里的token，写到环境变量dawToken里，多账户用@隔开
**多个号用 @ 或 换行 隔开**
```
#export dawck:  //旧已失效
export dawToken='account1@account2@account3'
```
#### 圈X重写配置如下:  
**[rewrite_local]**  
#都爱玩  
```
https://v3.sdk.haowusong.com/api/box/wallet/info url script-request-header https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/DouAiWan/daw.js
```
  
**[MITM]**  
```
hostname = v3.sdk.haowusong.com
```  
  
**[task_local]**  
```
0 * * * * https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/DouAiWan/daw.js, tag=都爱玩, enabled=true
```


## 收集来源

https://github.com/LubooC/Script/blob/main/daw.js（已失效）
https://github.com/leafxcy/JavaScript

## 感谢名单  

[LubooC](https://github.com/LubooC)

