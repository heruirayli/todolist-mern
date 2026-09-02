import axios from "axios"

const API_URL = "/api/goals/"

// create new goal
const createTodo = async (todoData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.post(API_URL, todoData, config)

  return response.data
}

// get user goals
const getTodo = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// delete user goal
const deleteTodo = async (todoId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.delete(API_URL + todoId, config)

  return response.data
}

const todoService = {
  createTodo,
  getTodo,
  deleteTodo
}

export default todoService