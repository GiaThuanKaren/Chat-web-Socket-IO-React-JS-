const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
app.use(cors());
const server = http.createServer(app);
// http://localhost:3000
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use("/", (req, res) => {
  res.send("...");
});
io.on("connection", function (socket) {
  console.log(socket.id);
  socket.on("send-message", (data, id) => {
    console.log(id, "id User",data);
    if (data!=="") {
      if (id === "") {
        console.log("Send All");
        socket.broadcast.emit("received-message", data);
      } else {
        console.log("Send one, to "+id);
        socket.to(id).emit("received-message", data);
      }
    }

    console.log(data);
  });
  socket.on("join-room", (room) => {
    console.log(room, "Joined");
    socket.join(room);
  });
});

server.listen(5000, () => {
  console.log("Running ");
});
