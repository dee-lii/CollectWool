# 软件名称：中青看点极速版（ios及安卓）
#### 由于中青看点最新版2.3.1版本抓不到ck，所以需要下载2.02版本的中青抓取ck。越狱手机直接下，非越狱手机用电脑下载爱思助手安装，具体请自行百度，本教程不涉及旧版应用的下载及安装说明。
## 圈X教程及重写
### 1、重写引用：
**[rewrite_remote]**

#签到cookie获取
```
https://raw.githubusercontent.com/CenBoMin/QuantumultX/master/Scripts/Youth/Youth_cookie.conf, tag=YouthCookie, update-interval=86400, opt-parser=false, enabled=true
```
#阅读body获取
```
https://raw.githubusercontent.com/CenBoMin/QuantumultX/master/Scripts/Youth/Youth_GetBody.conf, tag=YouthGetBody, update-interval=86400, opt-parser=false, enabled=true
```
### 2、域名:
**[MITM]**
```
kandian.wkandian.com, kd.youth.cn, ios.baertt.com
```
### 3、定时任务：  
**[task_local]**  
#签到&转盘任务
```
*/30 0-23 * * * https://raw.githubusercontent.com/CenBoMin/QuantumultX/master/Scripts/Youth/youth.js, tag=中青看点极速版, img-url=https://raw.githubusercontent.com/Orz-3/task/master/youth.png, enabled=true
```
#自动阅读任务
```
10 1-23 * * * https://raw.githubusercontent.com/CenBoMin/QuantumultX/master/Scripts/Youth/Youth_AutoRead.js, tag=中青阅读, img-url=https://raw.githubusercontent.com/Orz-3/task/master/youth.png, enabled=true
```

### 4、食用方法：
1、到[重写]-[引用],**启动YouthCookie禁用YouthGetBody**,先获取cookie

**签到cookie:**  
进入app，进入任务中心或者签到一次

阅读请求body&阅读时长:
阅读一篇文章或者视频到获取金币奖励

**惊喜红包:**  
在阅读文章拉下面有个惊喜红包，点击获取

2、手动执行一次定时脚本-”中青看点极速版”,看签到是不是正常

3、到[重写]-[引用],启动YouthGetBody禁用YouthCookie,获取文章body

**阅读请求body:**  
阅读一篇文章或者视频到获取金币奖励,通知提示body1

4、手动执行一次定时脚本-”中青阅读”,是不是运行正常

5、获取更多的body,一天一般上限7200金币,建议获取200个body

## V2P教程及重写
教程
https://t.me/ShaolinTemple1/34
https://t.me/ShaolinTemple1/45

#### 重写链接:  
```
https://kandian.wkandian.com/V17/Ximalaya/setCompleteSec.json script-request-header https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/ZhongQingKanDian/zq_music.js  
```

#### elecV2p订阅(源库)：

**重写：**
```
https://raw.githubusercontent.com/shaolin-kongfu/js_scripts/main/zq/zqcx.json
```
**任务：**
```
https://raw.githubusercontent.com/shaolin-kongfu/js_scripts/main/zq/zq_cron.json
```

#### 本库：
**重写：**
```
https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/ZhongQingKanDian/zq-rewrite.json
```
**任务：**
```
https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/ZhongQingKanDian/zq-cron.json
```
### 抓包


### 源脚本
 https://raw.githubusercontent.com/liuqi6968/-/main/zq_music.js (钟情AIpapa-去赚钱-收听音频)
 https://raw.githubusercontent.com/liuqi6968/-/main/zq_fbjl.js 
 https://github.com/shaolin-kongfu/js_scripts/tree/main/zq
### 致谢
[liuqi6968](https://github.com/liuqi6968)  
[shaolin-kongfu](https://github.com/shaolin-kongfu)
