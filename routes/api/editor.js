var express = require('express');
var router = express.Router();

const editorCtrl = require('../../controller/editorCtrl')

router.post('/create/img', editorCtrl.create.img);
router.post('/create', editorCtrl.create.writing);



module.exports = router;
