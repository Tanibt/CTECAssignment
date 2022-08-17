var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'musicityctec.cegt9mmyyexq.us-east-1.rds.amazonaws.com',
    port: '3306',
    user:'admin',
    password:'musicity',
    database: 'musicity'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected To AWS DB');
});
module.exports = connection;
