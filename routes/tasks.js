const express = require("express");
const router = express.Router();
const { 
  getAllTasks,
  createTasks,
  getsingleTasks,
  updateTasks,
  deleteTasks,
} = require("../controllers/task");

router.get("/", getAllTasks);
router.post("/", createTasks);
router.get("/:id", getsingleTasks);
router.patch("/:id", updateTasks);
router.delete("/:id", deleteTasks);

module.exports = router