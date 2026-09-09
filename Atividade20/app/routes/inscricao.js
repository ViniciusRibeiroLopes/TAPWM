module.exports = function (app) {
    app.get('/admin/inscricao', function (req, res) {
        res.render('admin/inscricao');
    });
};
