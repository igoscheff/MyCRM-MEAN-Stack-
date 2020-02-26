const express = require('express'),
    controller = require('../controllers/order'),
    router = express.Router();

router.get('/', controller.getAll);
router.post('/', controller.create);

module.exports = router;