import multer from "multer";

// Use memory storage for multer
const storage = multer.diskStorage({
    filename: function (req,file,cb){
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage });

export default upload;


//const storage = multer.memoryStorage(); 