const express = require('express');
const app = express();

const port = 3000;

//MiddleWare
app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) =>{
  res.send('Mi respuesta express')
})
app.get('/mantenimiento', (req, res) =>{
  res.send('Estas dentro de mantenimiento')
})

app.use(express.static(__dirname + "/public"))

//404 esto es solo cuando creas un html con el nombre 404 para crear la pagina de error 
app.use((req, res, next) =>{
  res.status(404).sendFile(__dirname + "/public/404.html")
})

app.listen(port, () => {
  console.log('Servidor en el puerto', port)
})
