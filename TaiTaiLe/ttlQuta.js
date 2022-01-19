// 太太乐库存查询
// [rule: ttlQuta ? ?] 

const request = require('request') ? require('request') :'';
const notify = require('./sendNotify') ? require('./sendNotify') : '';

var text = '';
var stockState = false;
async function main() {
  await getTTLInfo(633);
  await getTTLInfo(631);
  await getTTLInfo(62);
  await getTTLInfo(61);
  if(stockState)
    await notify.sendNotify("太太乐有库存了",text);
  console.log(text);
}

async function getTTLInfo(giftId){
  return new Promise(resolve => {
    try {
      request({
        // 内置http请求函数
        "url": "https://www.ttljf.com/ttl_site/giftApi.do?giftId="+giftId+"&mthd=giftDetail&sign=569aeaef6da7470ae38e4907aab980da&userId=",//请求链接
        "method": "get", //请求方法
        "json": true,
        "headers": {
          "content-type": "application/json",
        },
      },
        function (error, response, body) {
          //console.log(response);
          //console.log(body.gifts);
          if (!error && response.statusCode == 200) {
            try{
              let txt = body.gifts.giftName+"需要积分："+body.gifts.price+"库存："+body.gifts.stockAmount + "\n";
              if(body.gifts.stockAmount > 0){
                stockState = true;
              }
              text += txt;
              resolve()
            }catch(e) {
              console.log("error：解析json 错误");
              resolve()
            }
          } else {
            console.log("error",body);
            resolve()
          }
        })
    } catch (error) {
      console.log(error);
      resolve()
      //sendText(error)
    }
    
  })
}

main()
