let app = require('./app/config/server');
//COMENTAR
/*let rotaHome = require('./app/routes/home');
//rotaHome(app);
let rotaAdicionarUsuario = require('./app/routes/adicionar_usuario');
rotaAdicionarUsuario(app);
let rotaHistoria = require('./app/routes/historia'); // só esta definindo
rotaHistoria(app); // está executando
let otaCursos = require('./app/routes/cursos'); // só esta definindo
rotaCursos(app); // está executando
let rotaProfessores = require('./app/routes/professores'); // só esta definindo
rotaProfessores(app); // está executando
*/
app.listen(3000, function () {
    console.log("servidor iniciado");
});