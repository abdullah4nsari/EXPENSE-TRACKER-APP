const express = require("express");
const {
  addExpense,
  getAllExpense,
  deleteExpense,
  downloadExpenseExcel,
} = require("../controllers/expenseController");

const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/add", protect, addExpense);
router.get("/get", protect, getAllExpense);
router.get("/download", protect, downloadExpenseExcel);
router.delete("/delete/:id", protect, deleteExpense);

module.exports = router;
