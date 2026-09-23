let express = require('express');
let consign = require('consign');
let app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');
//o consign procura por todos os arquivos js dentro do
// diretório app/routes e, para cada um deles, execute o código contido,
//passando a instância do seu aplicativo Express (app) como um argumento.
consign().include('app/routes').into(app);
module.exports = app;