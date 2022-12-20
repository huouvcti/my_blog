const multer = require('multer');

const upload = (dir) =>{
    return multer ({
        storage: multer.diskStorage({
            // 폴더위치
            destination(req, file, done) {
                done(null, `public/images/${dir}`);
            },
            filename: (req, file, done) => {
                const fileName = file.originalname;
                done(null, fileName);
            },
        }),
        fileFilter: fileFilter
    })
}

const imgRename = function(imgFile, key, seq) {
    let img = {
        type: (imgFile.originalname).split('.')[1],
        dir: imgFile.destination
    }
    img.name = key + '_' + seq + '.'+img.type;
    return img;
}