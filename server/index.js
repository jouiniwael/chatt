const cors =require('cors')
const path = require('path');
const express = require('express');
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
const Server = require("http").createServer();

const io = require("socket.io")(Server, {
  cors: {
    origin: "http://localhost:8080",
  },
});

io.on('connection', socket=> {
  
  socket.on('private message',(message) =>{
console.log(message)
  })
})


Server.listen(PORT, () => console.log(`Server running on port ${PORT}`));




