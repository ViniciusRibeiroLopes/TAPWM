let app = require('../Exercicios/app/config/server');

let rotaHome = require('../Exercicios/app/routes/home');
rotaHome(app);

let rotaHistoria = require('../Exercicios/app/routes/historia');
rotaHistoria(app);

let rotaCursos = require('../Exercicios/app/routes/cursos');
rotaCursos(app);

let rotaProfessores = require('../Exercicios/app/routes/professores');
rotaProfessores(app);

let rotaAdicionarUsuario = require('../Exercicios/app/routes/adicionar_usuario');
rotaAdicionarUsuario(app);

app.listen(3000, function () {
    console.log('Servidor rodando na porta 3000');
});

module.exports = app;