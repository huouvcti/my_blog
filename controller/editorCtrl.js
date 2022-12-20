"use strict"

const create = {}

create.writing = async (req, res) => {
    res.render('../views/public/main.ejs');
}

create.img = async (req, res) => {
    const contentType = req
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