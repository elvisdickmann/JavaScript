let http = require('http');

http.createServer(function(req, res){
    res.end("Olá Node Express")
}).listen(8081)