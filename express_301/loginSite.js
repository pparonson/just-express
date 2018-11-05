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

// modify res obj with middleware to handle failed login auth
app.use((req, res, next) => {
  if (req.query.msg === "fail") {
    res.locals.msg = "No user found for this user and password combination. Please retry."
    console.log(`res.locals.msg: ${res.locals.msg}`)
  } else {
    res.locals.msg = ""
  }
  next()
})

app.get("/", (req, res, next) => {
  res.send("SUCCESS")
})

app.get("/login", (req, res, next) => {
  // console.log(req.query)
  res.render("login") // fetch login.ejs
})

app.post("/process_login", (req, res, next) => {
  // res.json(req.body)
  const username = req.body.username
  const password = req.body.password
  // if validated:
  if (password === "x") {
    // 1. save to cookie
    res.cookie("username", username) // key:value
    // 2. save to db; TODO
    // 3. send to welcome page
    res.redirect("/welcome")

  } else {
    res.redirect("/login?msg=fail&test=success")
  }
})

app.get("/welcome", (req, res, next) => {
  // res.send("WELCOME!")

  // res.cookies obj will have a prop for every set cookie key:value
  res.render("welcome", {
    username: req.cookies.username
  })
})

app.get("/story/:storyId", (req, res, next) => {
  res.send(`<h2>Story: ${req.params.storyId}</h2>`)
})

app.get("/logout", (req, res, next) => {
  res.clearCookie("username")
  res.redirect("/login")
})

const PORT  = 3000
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})
