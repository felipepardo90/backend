const socket = io();

let chatMessage = document.getElementById("chatMessage");
let username = document.getElementById("username");
let btn = document.getElementById("send");
let output = document.getElementById("output");
let actions = document.getElementById("actions");

// HBS Template

async function renderProducts(productos) {
  const response = await fetch("./main.hbs");
  const plantilla = await response.text();

  productos.forEach(producto => {
    const template = Handlebars.compile(plantilla)
    const html = template(producto)
    document.querySelector('#productos').innerHTML += html
})

  // const template = Handlebars.compile(plantilla);
  // const html = template(productos);
  // document.querySelector("#productos").innerHTML += html;
}

// function renderProducts(productos) {
//   console.log(productos, "render")
//   document.getElementById("product__container").innerHTML += `
//   <tbody><td>${productos.title}</td><td>${productos.price}</td><td>${productos.thumbnail}</td>
//   `;
// }

// eventos

btn.addEventListener("click", () => {
  socket.emit("chat:message", {
    message: chatMessage.value,
    username: username.value,
  });
});

chatMessage.addEventListener("keypress", () => {
  socket.emit("chat:typing", username.value);
});

// mensajes

socket.on("chat:message", (data) => {
  actions.innerHTML = "";
  output.innerHTML += `
<p>
<strong style="color:blue">${
    data.username
  }</strong> (<span style="color:brown; font-size:10px">${new Date().toLocaleString()}</span>): <i style="color:green">${
    data.message
  }</i>
</p>`;
});

// evento typing en el chat

socket.on("chat:typing", (data) => {
  actions.innerHTML = `<p><em>${data} está escribiendo...</em></p>`;
});

// obtener productos

socket.on("server:productos", (productos) => {
  renderProducts(productos);
});
