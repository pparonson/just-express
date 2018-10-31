const path = require("path")

const express = require("express")
const helmet = require("helmet")
const cookieParser = require('cookie-parser')

const app = express()

app.use(helmet())
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res, next) => {
  res.send("SUCCESS")
})

app.get("/login", (req, res, next) => {
  res.render("login") // fetch login.ejs
})

app.post("/process_login", (req, res, next) => {
  // res.json(req.body)
  const username = req.body.username
  const password = req.body.password
  // if validated:
  // 1. save to cookie
  // 2. save to db
  // 3. send to welcome page
  if (password === "x") {
    // key:value
    res.cookie("username", username)
    res.redirect("/welcome")

  } else {
    res.redirect("/login?msg=fail")
  }
})

app.get("/welcome", (req, res, next) => {
  // res.send("WELCOME!")
  // res.cookies obj will have a prop for every set cookie key:value
  res.render("welcome", {
    username: req.cookies.username
  })
})

const PORT  = 3000
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})
