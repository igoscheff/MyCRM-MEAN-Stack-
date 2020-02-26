const express = require('express'),
      controller = require('../controllers/auth'),
      router = express.Router();

router.post('/login', controller.login);
router.post('/register', controller.register);

module.exports = router;