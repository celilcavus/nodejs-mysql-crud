const connection = require('mysql2');

var context = connection.createConnection({
   host:'localhost', // db host
   user:'root', // user
   database:'node-app', // db adı
   password:'' // db parola
});





module.exports = context;