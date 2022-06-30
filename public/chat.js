const socket = io();

let chatMessage = document.getElementById("chatMessage");
let username = document.getElementById("username");
let btn = document.getElementById("send");
let output = document.getElementById("output");
let actions = document.getElementById("actions");

//DATE

let date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

// formato requerido
let now = `${day}/${month}/${year}, ${hour}:${minutes}:${seconds}`;
console.log(now);

//

btn.addEventListener("click", () => {
  socket.emit("chat:message", {
    message: chatMessage.value,
    username: username.value,
  });
});

chatMessage.addEventListener("keypress", () => {
  socket.emit("chat:typing", username.value);
});

socket.on("chat:message", (data) => {
  actions.innerHTML = "";
  output.innerHTML += `
<p>
<strong style="color:blue">${data.username}</strong>, <span style="color:brown; font-size:12px">${now}</span>: <i style="color:green">${data.message}</i>
</p>`;
});

socket.on("chat:typing", (data) => {
  actions.innerHTML = `<p><em>${data} está escribiendo...</em></p>`;
});

// const messageForm = document.querySelector("#messageForm");
// const usernameInput = document.querySelector("#usernameInput");
// const messageInput = document.querySelector("#messageInput");
// const messagesPool = document.querySelector("#messagesPool");

// function sendMessage(messageInfo) {
//   socket.emit("client:message", messageInfo);
// }

// function renderMessages(messagesInfo) {
//   const html = messagesInfo
//     .map((elem) => {
//       return `<div>
//         <strong>${elem.username}</strong>:
//         <em>${elem.message}</em>
//         </div>`;
//     })
//     .join(" ");

//   messagesPool.innerHTML = html;
// }

// function submitHandler(event) {
//   event.preventDefault();
//   const messageInfo = {
//     username: usernameInput.value,
//     message: messageInput.value,
//   };
//   sendMessage(messageInfo)
// }
// messageForm.addEventListener("submit", submitHandler);

// socket.on("server:mensajes", renderMessages);
