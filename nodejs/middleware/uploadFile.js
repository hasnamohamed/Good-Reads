const multer = require("multer");

function uploadFile(req,file,res)
{
    const multer = require("multer");

    const storage = multer.diskStorage({
        destination: "../public/images",
        filename: (req, file, cb) =>
        {
            let uniqueName= (new Date()).getTime().toString(36) + Math.random().toString(36).slice(2)
            let fileExtension =  file.mimetype.split("/")[1]
            cb(null, uniqueName + '.' + fileExtension)
        }
      })      
      
    return multer({ storage });
    
}


module.exports = uploadFile