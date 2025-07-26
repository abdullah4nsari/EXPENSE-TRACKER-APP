// const multer = require('multer');

// //configure storage
// const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,'uploads/');
//     },
//     filename:(req,file,cb)=>{
//         cb(null,`${Date.now().toString()}-${file.originalname}`);
//     }
// })

// //file filter
// const fileFilter = (req,file,cb)=>{
//     const allowedTypes = ['image/jpg','image/png','image/jpeg'];
//     if(allowedTypes.includes(file.mimetype)){
//         cb(null,true);
//     }else{
//         cb(new Error('Only .jpeg, .jpg and .png are allowed'),false);
//     }
// }
// const upload = multer({storage,fileFilter});

// module.exports = upload;
require("dotenv").config();
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'et_user_profiles',              // folder in your Cloudinary account
    allowed_formats: ['jpg', 'jpeg', 'png'],
    transformation: [{ width: 512, height: 512, crop: "limit" }] // optional
  }
});

const upload = multer({ storage });
module.exports = upload;
