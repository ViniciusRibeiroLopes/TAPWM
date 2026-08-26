let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send("<h1>Site FATEC Sorocaba</h1>")
})
app.get('/historia', (req, res) => {
    res.render("secao/historia")
})
app.get('/cursos', (req, res) => {
    res.render("secao/cursos")
})
app.get('/professores', (req, res) => {
    res.render("secao/professores")
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});