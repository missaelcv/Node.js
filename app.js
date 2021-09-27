const express = require('express');
const app = express();

const port = 3000;

app.use(express.static(__dirname + "/public"));



app.get('/',(req, res) => {
    res.send('Mi respuesta desde express')
})

app.get('/servicios',(req, res) => {
    res.send('Estan en la pagina del servidor')
})


app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/publc/404.html")
})


app.listen(port, () => {
    console.log('Servidor a su servicio en puerto',port)
})