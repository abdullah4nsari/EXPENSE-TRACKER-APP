const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Use only the base writable directory
const uploadDir = '/mnt/data';

try {
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir); // safe attempt
  }
} catch (err) {
  console.error("Error creating upload directory:", err.message);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Just use /mnt/data
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpg', 'image/jpeg', 'image/png'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only .jpeg, .jpg, and .png files are allowed'), false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
