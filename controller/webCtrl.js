"use strict"

const web = {}

web.index = async (req, res) => {
    res.render('../views/public/main.ejs');
}





module.exports = {
    web
}