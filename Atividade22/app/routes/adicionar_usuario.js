module.exports = function (app) {
    app.get('/adicionar_usuario', function (req, res) {
        res.render('admin/adicionar_usuario');
    });

    app.post('/adicionar_usuario', function (req, res) {
        console.log(req.body);
        res.render('admin/adicionar_usuario');
    });
}
