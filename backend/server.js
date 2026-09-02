const path = require("path")
const express = require("express")
const colors = require("colors")
const dotenv = require("dotenv").config()
const {errorHandler} = require("./middleware/errorMiddleware.js")
const { error } = require("node:console")
const connectDB = require("./config/db.js")
const port = process.env.PORT || 5000

connectDB()

const app = express()

// middleware for getting body data
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/goals", require("./routes/todoRoutes.js"))
app.use("/api/users", require("./routes/userRoutes.js"))

// serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")))

  app.get("/*splat", (req, res) => res.sendFile(path.resolve(__dirname, "../", "frontend", "build", "index.html")))
} else {
  app.get("/", (req, res) => res.send("Please set to production"))
}

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})

