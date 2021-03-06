'use strict';

var express = require('express');
var controller = require('./payment.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:orderId', controller.check);
router.put('/:orderId', controller.update);
router.post('/', controller.create);

module.exports = router;
