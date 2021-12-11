# 联通 沃邮箱
别玩掌庭会黑！！！

#### 注册
先去微信搜索并关注公众号:联通沃邮箱
授权手机号登录或者开通沃邮箱
然后密码重置:https://user.mail.wo.cn/m/reset?mobile

非联通用户：https://user.mail.wo.cn/?mobile 在这里注册

#### 抓包
注册登录后 建议使用PC抓包，手机也可以

打开抓包软件然后进入“联通沃邮箱公众号-进入邮箱”然后回到珠宝软件搜索nyan.mail.wo.cn

找到https://nyan.mail.wo.cn/cn/sign/index/index?mobile=xxxxxx&userName=&openId=xxxxxx

#### 青龙
export soy_wyx_data = '手机号#密码#抓包连接'

变量数据包含说明 手机号#密码#抓包连接
如:13800138000#123456#https://nyan.mail.wo.cn/cn/sign/index/index?mobile=xxxxxx&userName=&openId=xxxxxx

#### 拉取
建议使用soy拉库
ql repo https://gitee.com/soy-tool/app-script "app_|wx_|wy_" "" "axios|md5|axios"

## 来源
https://gitee.com/soy-tool/app-script/blob/master/wx_wyx.js#
