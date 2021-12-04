const multer = require('multer');

//extention
const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype]; //extention
    callback(null, name + Date.now() + '.' + extension); // appel du call back
  }
});

module.exports = multer({storage: storage}).single('image'); // exporter le multer fichier unique 
