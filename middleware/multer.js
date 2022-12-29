const multer = require('multer');
const fs = require("fs");

const dayjs = require("dayjs");

const upload = multer ({
    storage: multer.diskStorage({
        // 폴더위치
        destination(req, file, done) {
            done(null, `public/images/temp`);
        },
        // 파일 이름
        filename: (req, file, done) => {
            done(null, file.originalname);
        },
    }),
})

const imgRename = function(imgFile, dir, user_key) {
    const originDir =  imgFile.destination + '/' + imgFile.originalname
    const saveFolder = 'public/images/' + dir

    let date = new dayjs();
    let datetime = date.format('YYMMDDHHmmssms');

    console.log(saveFolder)

    const imgType = (imgFile.originalname).split('.')[1]

    const saveDir = `${saveFolder}/${user_key}_${datetime}.${imgType}`;

    // 경로 추가
    if (!fs.existsSync(saveFolder)) fs.mkdirSync(saveFolder);


    fs.rename(originDir, saveDir, (err) => {
        if (err) {
            console.log(err);
            return false;
        }
    });

    
    return saveDir;
}


module.exports = {
    upload,
    imgRename,
}