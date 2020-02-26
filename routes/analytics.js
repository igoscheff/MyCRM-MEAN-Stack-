const express = require('express'),
    controller = require('../controllers/analytics'),
    router = express.Router();

router.get('/overview', controller.overview);
router.get('/analytics', controller.analytics);

module.exports = router;