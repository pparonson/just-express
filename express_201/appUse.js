const express = require("express")
const path = require("path")

const app = express()

function validateUser(req, res, next) {
  res.locals.validated = true
  console.log(`validated: ${res.locals.validated}`);
  next() // hands control to next middleware in pipeline
}

app.use("/admin", validateUser) // runs middleware

app.get("/", (req, res, next) => {
  res.send("<h2>Main Page</h2>")
})

app.get("/admin", (req, res, next) => {
  res.send("<h2>Admin Page</h2>")
})

const PORT = 3000
app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))
