# 源火星球 
2022-01-10 收益支付宝日入 0.5

####  注册 
项目注册地址:http://reg.yuanhuoxingqiu.com/
https://yuanhuo.oss-cn-beijing.aliyuncs.com/apk/yuanhuoV1.22.0.apk

## 青龙
#### 教程
第一步： 打开注册链接 注册账号以及下载APP

第二步： 打开APP登录

第三步： 打开抓包软件

第四步： 回到APP随便点击

第五步： 回到抓包软件 搜索 ：api.yuanhuoxingqiu.com

第六步： 在请求中找 Authorization 和 UA

#### 抓包
抓包请求头api.yuanhuoxingqiu.com里面的Authorization,注意不要 Bearer 和空格

#### 拉取脚本
本库
```
ql raw https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/YuanHuoXingQiu/app_yhxq.js
```
源库
```
ql raw https://gitee.com/soy-tool/app-script/raw/master/app_yhxq.js
```
PS：建议源库，更新更快
#### 参数
```
export soy_yhxq_Authorization = '' 
#多账号@分割
#选填变量
export soy_yhxq_UA=''
```
定时
```
13 0-23/2 * * *
```

## 来源
https://t.me/c/1583226374/19748
https://gitee.com/soy-tool/app-script/raw/master/app_yhxq.js
