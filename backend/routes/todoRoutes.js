const express = require("express")
const router = express.Router()
const {
  getTodo, 
  setTodo, 
  updateTodo, 
  deleteTodo
} = require("../controllers/todoController.js")

// router.get("/", getTodo)
// router.post("/", setTodo)
// router.put("/:id", updateTodo)
// router.delete("/:id", deleteTodo)
router.route("/").get(getTodo).post(setTodo)
router.route("/:id").put(updateTodo).delete(deleteTodo)


module.exports = router