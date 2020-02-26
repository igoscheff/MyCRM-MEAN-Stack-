const express = require('express'),
    controller = require('../controllers/category'),
    router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getAById);
router.delete('/:id', controller.remove);
router.post('/', controller.create);
router.patch('/:id', controller.update);

module.exports = router;