const socket = io();

let chatMessage = document.getElementById("chatMessage");
let username = document.getElementById("username");
let btn = document.getElementById("send");
let output = document.getElementById("output");
let actions = document.getElementById("actions");

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


// TEMPLATE

// async function renderProducts(productos) {
//   const response = await fetch('./hbs/productList.hbs');
//   const plantilla = await response.text();

//   document.querySelector('#productPool').innerHTML = "";
//   productos.forEach(producto => {
//       const template = Handlebars.compile(plantilla);
//       const html = template(producto);
//       document.querySelector('#productPool').innerHTML += html;
//   })
// } 

async function renderProducts(productos) {
  /* CON HANDLEBARS: */
  const response = await fetch('./main.hbs')
  const plantilla = await response.text()

  productos.forEach(producto => {

      const template = Handlebars.compile(plantilla)
      const html = template(producto)
      document.querySelector('#products-output').innerHTML += html
  })
}

socket.on('server:productos', productos => {
  renderProducts(productos)
})
