// 太太乐获取Token
// [rule: ttl ? ?] 

const request = require('request') ? require('request') :'';
const userName = process.env.ttlUserName ? process.env.ttlUserName  : '';
const password = process.env.ttlUserName ? process.env.ttlPassword : '';

async function main() {
  //TODO 多账号
  if(request == ''){
    console.log("请安装依赖：request");
    return;
  }
  try {
    request({
      // 内置http请求函数
      "url": "https://www.ttljf.com/ttl_chefHub/login/restaurant",//请求链接
      "method": "post", //请求方法
      "json": true,
      "headers": {
        "content-type": "application/json",
      },
      "body": { "mthd": "login", "platform": "wx_mini", "userName": "" + userName, "password": "" + password }
    },
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
			console.log(body.data.token);
        } else {
          console.log(body);
        }
      })
  } catch (error) {
	console.log(error);
  }

}

main()

