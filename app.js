const express = require('express');
const app = express();

const port = 3000;
//Motor de plantilla
app.set('view engine', 'ejs');
app.set('views', __dirname + './views');


app.use(express.static(__dirname + "/public"));

app.get('/',(req, res) => {
    res.render("index", {titulo : "Mi Titulo dinamico"});
});

app.get('/servicios',(req, res) => {
    res.send('Estan en la pagina del servicios');
});

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/publc/404.html");
});

app.listen(port, () => {
    console.log('Servidor a su servicio en puerto',port);
});