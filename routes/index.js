var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.index);

// Nueva ruta para mostrar los detalles de una película
router.get('/peliculas/:id', indexController.mostrarPeliculaDetalle);

module.exports = router;
