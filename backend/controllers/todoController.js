const asyncHandler = require("express-async-handler")

const Todo = require("../models/todoModel.js")

// @desc    Get todo
// @route   GET /api/goals
// @access  Private
const getTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.find()

  res.status(200).json(todo)
})

// @desc    Set todo
// @route   POST /api/goals
// @access  Private
const setTodo = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error ("Please add a text field")
  }

  const todo = await Todo.create({
    text: req.body.text
  })

  res.status(200).json(todo)
})

// @desc    Update todo
// @route   PUT /api/goals/:id
// @access  Private
const updateTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id)

  if (!todo) {
    res.status(400)
    throw new Error("Todo not found")
  }

  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true})

  res.status(200).json(updatedTodo)
})

// @desc    Delete todo
// @route   DELETE /api/goals
// @access  Private
const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id)

  if (!todo) {
    res.status(400)
    throw new Error("Todo not found")
  }

  await todo.deleteOne()

  res.status(200).json({id: req.params.id })
})

module.exports = {
  getTodo,
  setTodo,
  updateTodo,
  deleteTodo
}