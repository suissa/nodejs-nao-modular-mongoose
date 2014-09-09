var Beer = require('./../models/beer');

module.exports = {
  create: function (req, res) {

    var msg = '',
      dados = {
        name: 'Budweiser',
        description: 'Até que vai',
        alcohol: 5.0,
        price: 3.5,
        category: 'lager'
      };

    var model = new Beer(dados);

    model.save(function (err, data ) {
      if (err){
        console.log('Erro: ', err);
        msg = 'Erro: ' + err;
      }
      else{
        console.log('Cerveja Inserida: ', data );
        msg = 'Cerveja inserida: ' + JSON.stringify(data );
      }
      res.end(msg);
    });
  },
  retrieve: function (req, res) {
    var msg = '';
    Beer.find({}, function (err, data ) {
      if (err){
        console.log('Erro: ', err);
        msg = 'Erro: ' + err;
      }else{
        console.log('Listagem: ', data );
        msg = 'Cervejas: ' + JSON.stringify(data );
      }
      res.end(msg);
    });

  },
  update: function (req, res) {
    var query = {name: 'Budweiser'},
      msg = '',
      mod = {
        alcohol: 99
      },
      optional = {
        upsert: false, 
        multi: true
      };

    Beer.update(query, mod, optional, function (err, data ) {
      if (err){
        console.log('Erro: ', err);
        msg = 'Erro: ' + err;
      }
      else{
        console.log('Cerveja atualizada com sucesso', data );
        msg = 'Cerveja atualizada com sucesso, quantidade: ' + data;
      }
      res.end(msg);
    });
  },
  delete: function (req, res) {
    var query = {name: 'Budweiser'}, msg = '';
    Beer.remove(query, function (err, data ) {
      if(err) {
        console.log(err);
        msg = 'Erro: ' + err;
      } else {
        console.log('Cerveja deletada com sucesso, quantidade: ', data );
        msg = 'Cerveja deletada com sucesso, quantidade: ' + data;
      }
      res.end(msg);
    });
  }
};