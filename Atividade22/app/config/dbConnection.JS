let sql = require('mssql');
module.exports = function () {
    const sqlConfig = {
        user: 'BDxxxxxxx',
        password: 'xxxxxxxxxx',
        database: 'BD',
        server: 'APOLO',
        options: {
            encrypt: false,
            trustServerCertificate: true
        }
    }
    return sql.connect(sqlConfig);
}