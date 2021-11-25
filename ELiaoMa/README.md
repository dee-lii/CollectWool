# 额了吗
### 抓包
###### ISO:
首先打开Stream（iOS上抓包软件），点击开始抓包，然后切换到饿了么app，依次点我的-赚吃货豆，然后切换回Stream点停止抓包，在点抓包历史，选最近的一次抓包记录，选按域名，找到h5.ele.me，进入后随便选一个链接进入，选请求。找到Cookie 复制备用

###### 安卓 我的不做任务待测试
*有SSL 需要VMOS+ssl 破解 或者root+ssl*
首先打开抓包软件（小黄鸟），点击开始抓包，然后切换到饿了么app，依次点我的-赚吃货豆，然后切换回Stream点停止抓包，在点抓包历史，选最近的一次抓包记录，选按域名，找到h5.ele.me，进入后随便选一个链接进入，选请求。找到Cookie 复制备用

### 青龙
青龙面板，环境变量，新建环境变量，名称elmck，值填入刚才复制的cookie或者
在配置文件，在末行填入
```
export elmck='cookie'
```
拉取脚本
```
ql raw https://raw.githubusercontent.com/LubooC/Script/main/ELM/elmchd.js
```
corn
```
5 12,18 * * *
```

### 来源
https://github.com/LubooC/Script/blob/main/ELM/elmchd.js
