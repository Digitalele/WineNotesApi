
const express = require('express');
const router = express.Router();

const serve = require('./serve');
const crud = require('./crud');

router.use('/serve', serve);
router.use('/crud', crud);

module.exports = router;