const http = require('http');
const server = http.createServer((req,res) => {
  res.end('Respuesta a tu solicitud final' )

})

const puerto = 3000;
server.listen(puerto, () => {
  console.log('Escuchando solicitud')
})
