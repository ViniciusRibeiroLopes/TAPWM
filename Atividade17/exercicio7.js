let http = require('http');
let server = http.createServer(function (req, res) {
    let opcao = req.url;

    if (opcao === '/historia') {
        res.end('<html><body>Página História</body></html>');
    } else if (opcao === '/cursos') {
        res.end('<html><body>Página Cursos</body></html>');
    } else if (opcao === '/alunos') {
        res.end('<html><body>Página Alunos</body></html>');
    } else if (opcao === '/professores') {
        res.end('<html><body>Página Professores</body></html>');
    } else if (opcao === '/contato') {
        res.end('<html><body>Página Contato</body></html>');
    } else {
        res.end('<html><body>Site da Fatec Sorocaba</body></html>');
    }
});

server.listen(3000);
console.log('Servidor rodando em http://localhost:3000');