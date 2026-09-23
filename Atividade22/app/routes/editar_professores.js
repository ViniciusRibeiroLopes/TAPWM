module.exports = function (app) {
    app.get('/admin/editar_professor', function (req, res) {
        async function getProfessorPorId() {
            try {
                let id_professor = req.query.id;
                let connection = app.config.dbConnection;
                const pool = await connection();
                let professoresModel = app.models.professormodel;
                professoresModel.getProfessorPorId(id_professor, pool, function (error, results) {
                    res.render('admin/editar_professores', { profs: results.recordset });
                });
            } catch (err) {
                console.log(err)
            }
        }
        getProfessorPorId();
    });
    app.post('/professor/editar', function (req, res) {
        async function editarProfessor() {
            try {
                let professor = req.body;
                let connection = app.config.dbConnection;
                const pool = await connection();
                let professoresModel = app.models.professormodel;
                professoresModel.editarProfessor(professor, pool, (error, results) => {
                    if (error) {
                        console.log('Erro ao inserir no banco:' + error);
                        res.status(500).send(error);
                    } else {
                        console.log('professor editado!!!');
                        res.redirect('/admin/crud_professores');
                    }
                });
            } catch (error) {
                console.log(error);
            }
        }
        editarProfessor();
    });
}