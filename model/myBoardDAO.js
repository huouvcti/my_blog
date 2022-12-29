const {db} = require('../config/dbconn');

const myBoard = {} 

myBoard.create = (parameters) =>{
    return new Promise((resolve, reject) =>{
        db.query(`INSERT INTO myBoard (user_key, title, content, tag, type, hidden) VALUES(?, ?, ?, ?, ?, ?)`, [parameters.user_key, parameters.title, parameters.content, parameters.tag, parameters.type, parameters.hidden], (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

module.exports = {
    myBoard
}