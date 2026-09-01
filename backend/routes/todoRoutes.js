const express = require("express")
const router = express.Router()
const {
  getTodo, 
  setTodo, 
  updateTodo, 
  deleteTodo
} = require("../controllers/todoController.js")

const {protect} = require("../middleware/authMiddleware.js")

// router.get("/", getTodo)
// router.post("/", setTodo)
// router.put("/:id", updateTodo)
// router.delete("/:id", deleteTodo)
router.route("/").get(protect, getTodo).post(protect, setTodo)
router.route("/:id").put(protect, updateTodo).delete(protect, deleteTodo)


module.exports = router