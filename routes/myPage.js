var express = require('express');
var router = express.Router();

const myPageCtrl = require('../controller/myPageCtrl')

router.get('/', myPageCtrl.myPage.main);

router.get('/write', myPageCtrl.myPage.write);



module.exports = router;
