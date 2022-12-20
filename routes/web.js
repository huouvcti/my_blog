var express = require('express');
var router = express.Router();

const webCtrl = require('../controller/webCtrl')

/* GET home page. */
router.get('/', webCtrl.web.index);

module.exports = router;
