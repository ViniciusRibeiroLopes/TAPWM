module.exports = function (app) {
    app.get('/programacao', function (req, res) {
        res.render('evento/programacao');
    });
};
