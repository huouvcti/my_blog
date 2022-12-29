"use strict";

require('dotenv').config({ path: '.env'});

const express = require('express');
const app = express();

const session = require('express-session');
const {sessionStore} = require('./config/dbconn');
const fs = require('fs');
const logger = require('morgan');
const path = require('path');

/*
 * router import
 */

const indexRouter = require('./routes/web');

const myPageRouter = require('./routes/myPage');

const loginRouter = require('./routes/api/login');
const editorRouter = require('./routes/api/editor');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express)

app.use('/public', express.static(__dirname +'/public'));



app.use(session({
    secret: process.env.SECRET_KEY, // 암호화
    resave: false,                  // 세션을 언제나 저장
    saveUninitialized: true,        // 세션이 저장되기 전 uninitialized 상태로 미리 만들어 저장
    store: sessionStore,
    cookie: {
        maxAgeL: 1000 * 60 * 60
    }
}));

app.use(logger('dev'));



app.use('/', indexRouter);

app.use('/myPage', myPageRouter);

app.use('/api/login', loginRouter);
app.use('/api/editor', editorRouter);




// ERROR 잘못된 경로
app.use(function(req, res, next) {
    res.status(404).send('404: Not Found!');
});
  
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('500: Something broke!')
});


module.exports = app;