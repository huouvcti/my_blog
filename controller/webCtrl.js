"use strict"

const web = {}

web.login = async (req, res) => {
    res.render('../views/login.ejs');
}

web.main = async (req, res) => {
    res.render('../views/main.ejs');
}

web.board_list = async (req, res) => {
    res.render('../views/board/board_list.ejs');
}






module.exports = {
    web
}