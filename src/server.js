const app = require('./app')

// starting server

const main = async ()=>{
  await app.listen(app.get('port'))
  console.log(
    `Servidor HTTP conectado, escuchando en el puerto ${app.get('port')}`
  );
}

main()
