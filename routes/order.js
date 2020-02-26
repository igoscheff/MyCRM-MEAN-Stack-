const express = require('express'),
    controller = require('../controllers/order'),
    passport = require('passport'),
    router = express.Router();

router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll);
router.post('/', passport.authenticate('jwt', {session: false}), controller.create);

module.exports = router;