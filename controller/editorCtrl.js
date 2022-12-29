"use strict"

const {imgRename} = require("../middleware/multer");

const myBoardDAO = require('../model/myBoardDAO.js');

const create = {}

create.writing = async (req, res) => {
    const parameters = {
        user_key: req.session.user_key,

        title: req.body.title,
        content: req.body.content,
        tag: req.body.tag,
        type: req.body.type,
        hidden: req.body.hidden
    }

    console.log(parameters)

    let db_data = await myBoardDAO.myBoard.create(parameters);
    let myBoard_key = db_data.insertId
    
    if(isNaN(myBoard_key)){
        res.send({myBoard_key: null})
    } else {
        res.send({result: myBoard_key})
    }
}

create.imgUpload = async (req, res) => {
    const imgFile = req.file;
    const user_key = req.session.user_key;

    let dir = '/' + imgRename(imgFile, 'myBoard', user_key)

    // let dir = '/' + imgFile.destination + '/' + imgFile.originalname

    console.log(dir)
    res.send(dir)
}

const update = async (req, res) => {
    res.render('../views/public/main.ejs');
}

const del = async (req, res) => {
    res.render('../views/public/main.ejs');
}






module.exports = {
    create,
    update,
    del
}