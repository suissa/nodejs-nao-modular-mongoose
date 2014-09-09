var http = require("http")
  Controller = require('./controllers/beers');

http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});

  var url = req.url;

  switch (url) {
  case '/create':
    Controller.create(req, res);
    break;
  case '/retrieve':
    Controller.retrieve(req, res);
    break;
  case '/update':
    Controller.update(req, res);
    break;
  case '/delete':
    Controller.delete(req, res);
    break;
  default:
    res.end('Rota não encontrada');
  }

}).listen(3000);
console.log('Server running at http://localhost:3000/');


