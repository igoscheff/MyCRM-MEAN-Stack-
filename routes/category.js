const express = require('express'),
    controller = require('../controllers/category'),
    passport = require('passport'),
    router = express.Router();

router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll);
router.get('/:id', passport.authenticate('jwt', {session: false}), controller.getAById);
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.remove);
router.post('/', passport.authenticate('jwt', {session: false}), controller.create);
router.patch('/:id', passport.authenticate('jwt', {session: false}), controller.update);

module.exports = router;