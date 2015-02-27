// サーバーからデータを受け取って波を立てる
var socket = io();
socket.on('wave', function (data) {
    console.log(data);
});