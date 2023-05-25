const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const PORT = process.env.PORT || 5000;
const router = require("./router");

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(router);

io.on("connection", (socket) => {
    console.log("new user");

    socket.on("disconnect", () => {
        console.log("user left");
    });
});

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
