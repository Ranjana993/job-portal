const path = require("path")
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, path.join(__dirname, "../public/temp"))
    }
  },
  filename: (req, file, cb) => {
    // console.log("inside filename", file);
    const name = Date.now() + '_' + file.originalname
    cb(null, name)
  }
})

const upload = multer({ storage: storage })
module.exports = upload


