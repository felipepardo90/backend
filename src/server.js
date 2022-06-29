const app = require("./app");

// starting server

const server = app.listen(app.get("port"));
console.log(
  `Servidor HTTP conectado, escuchando en el puerto ${app.get("port")}`
);

const SocketIO = require("socket.io");
const io = SocketIO(server);

// websockets

io.on("connection", (socket) => {
  console.log("User connected");
});
