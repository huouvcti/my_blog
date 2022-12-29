var express = require('express');
var router = express.Router();

const webCtrl = require('../controller/webCtrl')

/* GET home page. */
router.get('/', webCtrl.web.main);

router.get('/login', webCtrl.web.login);


router.get('/board', webCtrl.web.board_list);

module.exports = router;
