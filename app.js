const express = require('express');
const WSServer = require('./src/socket/WSServer.js');

const app = express();
const port = process.env.PORT || 3000;
const wsPort = process.env.WSPORT || 5000;

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

const wss = new WSServer(wsPort);
wss.recieve("usercreate", data => {
    console.log(`recieved ${JSON.stringify(data)}`);
})

console.log("websocket server created");