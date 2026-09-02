let texto = "Observe que essa mensagem vem do módulo";

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('home/index', { texto });
    });

    app.get('/cadastro', function (req, res) {
        res.render('admin/adicionar_usuario');
    });
}