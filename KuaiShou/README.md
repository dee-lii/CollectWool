# 筷手极速版



## V2p
#### 抓包
App->去赚钱->签到
#### 重写订阅
```
https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/KuaiShou/ks-rewrite.json
```
#### 任务订阅
```
https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/KuaiShou/ks-cron.json
```

## 青龙
#### 抓包
搜索url 关键词： basicInfo
找到数据包，并打开，在请求头中，找到cookie后面的字符串，复制cookie=字符串

字符串就是需要的COOKIE
#### 拉库
```
ql raw https://raw.githubusercontent.com/liuqi6968/-/main/ks_js.js
```

#### 定时
```
0 */1 * * * 
```
#### 参数
```
export kshd='cookie1后面的字符串@cookie2后面的字符串'
```
