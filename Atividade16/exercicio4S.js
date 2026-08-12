const fs = require('fs');
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data.toString());