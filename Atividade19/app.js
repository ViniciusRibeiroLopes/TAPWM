let app = require('../Exercicios/app/config/server');
let texto = require('./modulo1');

app.get('/', function (req, res) {
    res.render('home/index', { texto });
});

app.get('/historia', function (req, res) {
    res.render('informacao/historia');
});

app.get('/cursos', function (req, res) {
    res.render('informacao/cursos');
});

app.get('/professores', function (req, res) {
    res.render('informacao/professores');
});

app.get('/admin/adicionar_usuario', function (req, res) {
    res.render('admin/adicionar_usuario');
});

app.post('/admin/adicionar_usuario', function (req, res) {
    console.log(req.body);
    res.render('admin/adicionar_usuario');
});

app.listen(3000, function () {
    console.log('Servidor rodando na porta 3000');
});

module.exports = app;