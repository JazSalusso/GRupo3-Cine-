var express = require('express');
var router = express.Router();
const userControllers = require('../controllers/usersController')

router.get('/login',userControllers.login);
router.get('/register', userControllers.register);

module.exports = router;
