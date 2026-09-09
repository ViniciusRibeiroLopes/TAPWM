const app = require('./app/config/server');

const rotaHome = require('./app/routes/home');
rotaHome(app);

const rotaSobre = require('./app/routes/sobre');
rotaSobre(app);

const rotaProgramacao = require('./app/routes/programacao');
rotaProgramacao(app);

const rotaContato = require('./app/routes/contato');
rotaContato(app);

const rotaInscricao = require('./app/routes/inscricao');
rotaInscricao(app);

const rotaNovidades = require('./app/routes/novidades');
rotaNovidades(app);

app.listen(3000, function () {
    console.log('Servidor rodando na porta 3000');
});

module.exports = app;
