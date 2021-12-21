# 阅多多/悦看点

可以在环境变量yddSkipWithdraw设置不想提现的金额，逗号隔开，填0就会尝试提现所有金额
export yddSkipWithdraw='1'
## 青龙：
#### 抓包
捉取 https://yuekandian.yichengw.cn/api/v1/member/profile 的包里的Authorization，device和User-Agent，按顺序用#连起来写到yddCookie里，多账户用@隔开

```
export yddCookie='账号1的Authorization#device#UA@账号2的Authorization#device#UA'

```

## V2P重写：
```
https://github.com/CollectWoolTeam/CollectWool/blob/main/YueKanDian/ykd-rewrite.json
```


## QX
打开APP即可获取CK，没有的话点一下我的页面或者赚钱页面
[task_local]
#阅多多
0-59/15 8-23 * * * https://raw.githubusercontent.com/leafxcy/JavaScript/main/ydd.js, tag=阅多多, enabled=true
[rewrite_local]
https://yuekandian.yichengw.cn/api/v1/member/profile url script-request-header https://raw.githubusercontent.com/leafxcy/JavaScript/main/ydd.js
[MITM]
hostname = yuekandian.yichengw.cn



## 来源
https://raw.githubusercontent.com/leafxcy/JavaScript/main/ydd.js
