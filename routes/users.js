var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Ruta para mostrar la página de login
router.get('/login', function(req, res, next) {
  res.render('login');
});

// Ruta para mostrar la página de registro
router.get('/register', function(req, res, next) {
  res.render('register');
});

module.exports = router;
