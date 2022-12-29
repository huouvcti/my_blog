"use strict"

const userDAO = require('../model/userDAO');

const login = async (req, res) => {
    const parameters = {
        id: req.body.id,
        pw: req.body.pw
    }

    const db_data = await userDAO.user_check(parameters);

    if(db_data.length != 0){
        req.session.user_key = db_data[0]['user_key'];
        res.send({result: true});
    } else {
        res.send({result: false});
    }
}

const logout = async (req, res) => {
    delete req.session.user_key;

    res.send(`<script>location.href = '/'</script>`)
}






module.exports = {
    login,
    logout
}