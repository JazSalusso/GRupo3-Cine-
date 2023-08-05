var express = require('express');
var router = express.Router();
const productsController = require("../controllers/productsController");


router.post('/cargar', productsController.cargar);
router.get('/cargar', productsController.cargar);

router.get('/editar', productsController.editar);
router.post('/editar', productsController.editar);

router.get('/detalle', function(req, res, next) {
    res.render('detalle');
  });

router.get('/carrito', function(req, res, next) {
    res.render('carrito');
  });


  
module.exports = router;