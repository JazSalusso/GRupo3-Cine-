var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');


router.get('/', indexController.index);
router.get('/peliculas/:id', indexController.mostrarPeliculaDetalle);

module.exports = router;
