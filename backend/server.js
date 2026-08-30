const express = require("express")
const dotenv = require("dotenv").config()
const {errorHandler} = require("./middleware/errorMiddleware.js")
const { error } = require("node:console")
const port = process.env.PORT || 5000

const app = express()

// middleware for getting body data
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/goals", require("./routes/todoRoutes.js"))

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})

