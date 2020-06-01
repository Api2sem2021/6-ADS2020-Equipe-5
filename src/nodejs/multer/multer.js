const path = require("path");
const multer = require("multer");
const crypto = require("crypto");

module.exports = {
  dest: path.resolve(__dirname, '..', 'public', 'assets', 'imgs'),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', 'public', 'assets', 'imgs'))
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if(err) cb(err);

        const fileName = `${hash.toString('hex')}-${file.originalname}`;

        cb(null, fileName)
      })
    }
  }),
  limits: {
    fileSize: 10 * 1024 * 1024
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/gif"
    ];

    if(allowedMimes.includes(file.mimetype)){
      cb(null, true)
    }else{
      cb(new Error('Formato de arquivo não válido!'))
    }
  }
};
