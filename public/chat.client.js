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

const formContainer = document.querySelector("#form-products");
const productInput = document.querySelector("#product-input");
const priceInput = document.querySelector("#price-input");
const thumbnailInput = document.querySelector("#thumbnail-input");

function submitHandlerProduct(e) {
  e.preventDefault();

  const title = productInput.value;
  const price = priceInput.value;
  const thumbnail = thumbnailInput.value;

  socket.emit("cliente:producto", { title, price, thumbnail });
}

async function renderProducts(productos) {
  /* CON HANDLEBARS: */
  const response = await fetch("./main.hbs");
  const plantilla = await response.text();

  productos.forEach((producto) => {
    const template = Handlebars.compile(plantilla);
    const html = template(producto);
    document.querySelector("#products-output").innerHTML += html;
  });
}

formContainer.addEventListener("submit", submitHandlerProduct);
socket.on("server:productos", renderProducts);
