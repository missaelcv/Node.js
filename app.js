const http = require ('http');
const serven = http.createServer((req, res) => {
    res.end('Estoy Respondiendo tu Solicitud V.3')
})

const puerto = 3000;
serven.listen(puerto, () => {
    console.log('Escuchando Tu Solicitud')
})
