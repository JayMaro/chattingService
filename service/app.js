const express = require('express')
const socket = require('socket.io')
const http = require('http')
const app = express()

// 요청을 들을 곳을 인자로 받는다
const server = http.createServer(app)

const io = socket(server)

app.get('/', function(request, response){
  console.log('유저가 /으로 접속했습니다.');
  response.send(`${request.method}, ${request.url},Hello, Express Server!!`)
})

server.listen(8080, function() {
  console.log('서버 실행중');
})