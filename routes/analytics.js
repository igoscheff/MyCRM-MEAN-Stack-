const express = require('express'),
    controller = require('../controllers/analytics'),
    passport = require('passport'),
    router = express.Router();

router.get('/overview', passport.authenticate('jwt', {session: false}), controller.overview);
router.get('/analytics', passport.authenticate('jwt', {session: false}), controller.analytics);

module.exports = router;