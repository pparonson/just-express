const path = require("path")

const express = require("express")
const helmet = require("helmet")

const app = express()

app.use(helmet())
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded())

// middleware
function validateUser(req, res, next) {
  // if () {
  //   ... logic to validate user
  // }
  res.locals.validated = true
  next()
}

app.use(validateUser)

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res, next) => {
  // the data in the 2nd arg is appended to res.locals as json obj
  res.render("index", {
    // value for DOM
    msg: "SUCCESS!!"
    , msg2: "SUCCESS AGAIN!"
    , image: '<p><img="/home/brightbug/Downloads/bitcoin.jpeg" /></p>'
  })
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
})
