# 琪琪的果园
小程序cookie 过期块 app过期慢
## 入口
威信小程序：琪琪的果园

APP1(财神农庄)：http://fingertap.weiju123.com/download/abc454b8102b25ea?invite=a0f094&v=0

APP2(爆金庄园)：http://chenggan.weiju123.com/download/7c99fe9a5048908c?invite=22c4b3&v=0

## 抓包
登录抓包后找链接**url**请求头：https://www.weiju123.com/  
1、获取**Cookie**内容 格式：PHPSESSID=XXXX  
2、获取**Body/JSON**内容（小黄鸟在请求底部的Text/预览）： {"buildid":1,"hv":"1.02","aot":"aotValue"} 只要aot的值
### 青龙使用 

### 变量
多账户用@分开

琪琪的果园
```
export qqck='PHPSESSID=XXXX@PHPSESSID=XXXX'
export qqaot='aotValue@aotValue'
```
#财神农庄 
```
export csnzhd='PHPSESSID=XXXX@PHPSESSID=XXXX'
export csnzaot='aotValue@aotValue'
```
爆金庄园
```
export bjzyhd='PHPSESSID=XXXX@PHPSESSID=XXXX'
export bjzyaot='aotValue@aotValue'
```

### 拉取
琪琪的果园
```
ql raw https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/QiQiDeGuoYuan/qqdgy.js
```
财神农庄  
```
ql raw https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/QiQiDeGuoYuan/csnz.js
```
爆金庄园
```
ql raw https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/QiQiDeGuoYuan/bjzy.js
```
### 定时 CRON
财神农庄  
```
25 7-13/1 * * *
```
爆金庄园
```
45 7-13/1 * * *
```
### 注意
**获取运行后不要再手动进入游戏**，因为授权Cookie会失效，每次登录都需要重新抓包。

## 来源
https://github.com/LubooC/Script/blob/main/QQDGY/qqdgy.js
https://gitee.com/xiecoll/radish-script/raw/master/qqdgy.js（现版本）

财神农庄\爆金庄园:肥皂有毛毛
