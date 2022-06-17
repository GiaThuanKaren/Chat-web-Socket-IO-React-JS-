const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require('cors');
app.use(cors());
const server = http.createServer(app);
// http://localhost:3000
const io = new Server(server, {
  cors: {
    origin: '*'
  }
});

app.use("/",(req, res) => {
  res.send("...")
})
io.on("connection", function(socket){
  socket.on("send-message", (data) => {
    console.log(data)
  })
});

server.listen(5000,() =>{
    console.log("Running ")
})

