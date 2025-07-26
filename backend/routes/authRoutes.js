const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");
const {
  registerUser,
  loginUser,
  getUserInfo,
} = require("../controllers/authController");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/getuser", protect, getUserInfo);

router.post("/upload-image", upload.single("image"), (req, res) => {
  // if(!req.file){
  //     return res.status(400).json({message:"No file uploaded"})
  // }
  // // const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

  // res.status(200).json({imageUrl});
  try {
    if (!req.file || !req.file.path) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    return res.status(200).json({
      Success: true,
      message: "Profile image uploaded",
      imageUrl: req.file.path,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Upload failed", error });
  }
});

module.exports = router;
