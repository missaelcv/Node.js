const express = require('express');

const app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + ' /views');

app.use(express.static(__dirname + "public"));

app.get("/", (req, res) => {
    res.send("index", { titulo: "inicio EJS" });
  });

app.get('/servicios',(req,res) => {
    res.send('Estas en la pagina de Servicios')
})

app.use((req,res,next) => {
    res.status(404).sendFile(__dirname + "/public/404.html")
})

app.listen(port, () => {
    console.log('servidor a su servicio en el puerto', port)
})