"use strict"

const myPage = {}


myPage.main = async (req, res) => {
    if(req.session.user_key){
        res.render('../views/myPage/myPage.ejs');
    } else {
        res.send(`<script>location.href = '/login';</script>`);
    }
    
}

myPage.write = async (req, res) => {
    if(req.session.user_key){
        res.render('../views/myPage/write.ejs');
    } else {
        res.send(`<script>location.href = '/login';</script>`);
    }
    
}



module.exports = {
    myPage
}