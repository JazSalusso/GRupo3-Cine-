var express = require('express');
var router = express.Router();
const productsController = require("../controllers/productsController");

router.get('/cargar', productsController.cargarMostrar);
router.post('/cargar', productsController.cargar);

router.get('/editar', productsController.editarMostrar);
router.put('/editar', productsController.editar);

router.get('/detalle',productsController.detalle);
router.get('/carrito', productsController.carrito);
  
module.exports = router;