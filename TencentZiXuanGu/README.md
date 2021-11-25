# 腾讯自选股

## 抓包
键转Json工具：https://tooltt.com/header2json/
#### App 有SSL加密
1、开启抓包工具开始抓包
2、进入APP->登录->点击左上角头像->右上角金币
3、回到抓包工具，搜索url "daily"，
4、找到链接后，复制当前域名（url）备用(下述称此url为AppUrl)，
5、查看header，从Host 开始复制到最后
```
Host: wzq.tenpay.com
Connection: keep-alive
Sec-Fetch-Mode: cors
User-Agent: xxxx
Accept: */*
X-Requested-With: xxxx
Sec-Fetch-Site: same-origin
Referer: xxxx
Accept-Encoding: gzip, deflate, br
Accept-Language: xxxx
Cookie: xxxxxxxx
```
然后使用上面提供的链接进行键转Json得到如下
```
{"Host":"wzq.tenpay.com","Connection":"keep-alive","Sec-Fetch-Mode":"cors","User-Agent":"xxxx","Accept":"*/*","X-Requested-With":"xxxx","Sec-Fetch-Site":"same-origin","Referer":"xxxx","Accept-Encoding":"gzip, deflate, br","Accept-Language":"xxxx","Cookie":"xxxxxxxx"}
```
↑这个json (下述称此json为appHeader)

#### Wx
开启抓包工具
wx 搜索公众号"腾讯自选股"->列表栏->微证券-我的->福利中心
然后回到抓包工具，搜索url "daily"，找到链接后查看header，从Host 开始复制到最后
```
Host: wzq.tenpay.com
Connection: keep-alive
Sec-Fetch-Mode: cors
User-Agent: xxxx
Accept: */*
X-Requested-With: xxxx
Sec-Fetch-Site: same-origin
Referer: xxxx
Accept-Encoding: gzip, deflate, br
Accept-Language: xxxx
Cookie: xxxxxxxx
```
然后使用上面提供的链接进行键转Json得到如下
```
{"Host":"wzq.tenpay.com","Connection":"keep-alive","Sec-Fetch-Mode":"cors","User-Agent":"xxxx","Accept":"*/*","X-Requested-With":"xxxx","Sec-Fetch-Site":"same-origin","Referer":"xxxx","Accept-Encoding":"gzip, deflate, br","Accept-Language":"xxxx","Cookie":"xxxxxxxx"}
```
↑这个json 下面称为WxHeader


## 青龙
方法一：青龙面板->环境变量->新建环境变量，
名称TxStockAppUrl 值为：appUrl
名称TxStockAppHeader 值为：appHeaderJson
名称TxStockWxHeader 值为：wxHeaderJson

方法二：青龙面板->配置文件->config.sh，在配置文件，在末行填入如下内容：
将AppUrl、AppHeader和WxHeader 安装如下填入
```
export TxStockAppUrl='AppUrl'
export TxStockAppHeader='AppHeader'
export TxStockWxHeader='WxHeader'
```
回到“定时任务”拉取脚本
```
ql raw https://raw.githubusercontent.com/leafxcy/JavaScript/main/txstock.js
```
修改脚本定时
cron：
```
35 11,16 * * *	

```

## 来源
https://github.com/leafxcy/JavaScript
公众号：少年歌行Pro
