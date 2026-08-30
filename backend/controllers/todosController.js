const asyncHandler = require("express-async-handler")

// @desc    Get todo
// @route   GET /api/goals
// @access  Private
const getTodo = asyncHandler(async (req, res) => {
  res.status(200).json({"message": "Get todos"})
})

// @desc    Set todo
// @route   POST /api/goals
// @access  Private
const setTodo = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error ("Please add a text field")
  }
  res.status(200).json({"message": "Set todos"})
})

// @desc    Update todo
// @route   PUT /api/goals/:id
// @access  Private
const updateTodo = asyncHandler(async (req, res) => {
  res.status(200).json({"message": `Update todos ${req.params.id}`})
})

// @desc    Delete todo
// @route   DELETE /api/goals
// @access  Private
const deleteTodo = asyncHandler(async (req, res) => {
  res.status(200).json({"message": `Delete todos ${req.params.id}`})
})

module.exports = {
  getTodo,
  setTodo,
  updateTodo,
  deleteTodo
}