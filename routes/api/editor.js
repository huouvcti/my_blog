var express = require('express');
var router = express.Router();

const editorCtrl = require('../../controller/editorCtrl')
const multer  = require("../../middleware/multer");


router.post('/create/img', multer.upload.single('img'), editorCtrl.create.imgUpload);

router.post('/create', editorCtrl.create.writing);



module.exports = router;
