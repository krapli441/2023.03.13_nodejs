const mainPage = require("./module/html");
console.log(mainPage);
// 파일 가져옴
const http = require('http');

const server = http.createServer(function(request, response){
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  response.end(mainPage);
});
// 응답 패턴 알려줌

server.listen(2080, function(error) {
  if(error) {
    console.error('서버 안 돌아감');
  } else {
    console.log('서버 돌아감');
  }
})

// 듣는 방식