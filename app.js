// const express = require('express');
// const app = express();
// const http = require("http");
// const path = require("path");

// const socketio = require("socket.io");

// const server = http.createServer(app);

// const io = socketio(server);

// app.get('/',function(req,res){
//     res.render("index");
// })

// app.set("view engine","ejs");
// app.set(express.static(path.join(__dirname,"public")));

// io.on("connection",function(socket){
//     console.log("connected");
// });

// server.listen(3000)
const express = require('express');
const app = express();
const http = require("http");
const path = require("path");
const socketio = require("socket.io");

// Create HTTP server
const server = http.createServer(app);

// Create Socket.io instance
const io = socketio(server);

// Set EJS as the view engine
app.set("view engine", "ejs");

// Set the directory for views
app.set("views", path.join(__dirname, "views"));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Route for the root URL
app.get('/', function(req, res) {
    res.render("index");
});

// Handle socket connections
io.on("connection", function(socket) {
    socket.on("send-location",function(data){
          io.emit("receive-location",{id : socket.id , ...data});
    });
    socket.on("disconnect",function(){
        io.emit("user-disconnected",socket.id);
    });
});



// Start the server
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
