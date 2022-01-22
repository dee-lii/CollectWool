// 太太乐Token
// [rule: Token ? ?] 
//ttlAccount 格式 账号-密码@账号-密码

const request = require('request') ? require('request') :'';
const ttlAccount = process.env.ttlAccount ? process.env.ttlAccount  : '';
var tokens = '';
async function main() {
    if(request == ''){
            console.log("请安装依赖：request");
            return;
        }
    let ttla = ttlAccount.split('@');
    for(var i=0;i < ttla.length;i++ ){
        try{
            let ttlap = ttla[i].split('-');
            let account = ttlap[0];
            let password = ttlap[1];
            try{
                await getToken(account,password);
            }catch(err) {
                console.length("请求有问题");
            }
        }catch(err) {
            console.length("乱填跑个锤子");
        }
    }
    if(tokens.length>0){
        console.log("太太乐Token：\n"+tokens.substr(0, tokens.length - 1));
    }else{
        console.log("睡觉去");
    }
    
}

async function getToken(account,password){
    return new Promise(resolve => {
        
        //console.log(account+":"+password);
        try {
            request({
            // 内置http请求函数
            "url": "https://www.ttljf.com/ttl_chefHub/login/restaurant",//请求链接
            "method": "post", //请求方法
            "json": true,
            "headers": {
                "content-type": "application/json",
            },
            "body": { "mthd": "login", "platform": "wx_mini", "userName": "" + account, "password": "" + password }
            },
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                //console.log(body.data.token);
                    if(body.data.token){
                        tokens = tokens + body.data.token+"@";
                        //console.log(tokens);
                    }
                } else {
                    console.log(body);
                }
                resolve();
            })
        } catch (error) {
            console.log(error);
            resolve();
        }
    });
}
main()


