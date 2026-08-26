let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.send("<h1>Site FATEC Sorocaba</h1>")
})
app.get('/historia', (req, res) => {
    res.send("<h1>História</h1>")
})
app.get('/cursos', (req, res) => {
    res.send("<h1>Cursos</h1>")
})
app.get('/professores', (req, res) => {
    res.send("<h1>Professores</h1>")
})

app.listen(3000, () => {
    console.log('Servidor rodando');
});