const estrenos = require('../data/estrenos.json'); 
const proximoEstrenos = require('../data/proximo estrenos.json');

  module.exports = {
    index : (req,res) => {
      return res.render('index')
    }

}

