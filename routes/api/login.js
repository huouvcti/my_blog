var express = require('express');
var router = express.Router();

const loginCtrl = require('../../controller/loginCtrl')

router.post('/login', loginCtrl.login);

router.get('/logout', loginCtrl.logout);



module.exports = router;
