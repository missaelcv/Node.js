const express = require('express');
const app = express();

const port = 3000;
//Motor de plantilla
app.set('view engine', 'ejs');
app.set('views', __dirname + './views');


app.use(express.static(__dirname + "/public"));

app.get('/',(req, res) => {
    res.render("index", {titulo : "Mi Titulo dinamico"});
})

app.get('/servicios',(req, res) => {
    res.render("servicios", {tituloServicio: "Este es un menesja dinamico de servicios"})
})

app.use((req, res, next) => {
    res.status(404).render("404",{
        titulo: 404,
        descripcion: "Titulo del sitio web"
    })
})

app.listen(port, () => {
    console.log('Servidor a su servicio en puerto',port)
})