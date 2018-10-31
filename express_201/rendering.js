const path = require("path")

const express = require("express")
const helmet = require("helmet")

const app = express()

// helmet on and ready for battle!
app.use(helmet())
// serve static files
// app.use( express.static("./public") )
// // parse json and urlencoded data into req.body
// app.use( express.json() )
// app.use( express.urlencoded({extended:false}) )
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// 1. Express as we know it runs
// 2. We define a view engine
// 	- EJS
// 	- Mustache
// 	- Handlebars
// 	- Jade/Pug
// 3. Inside one of our routes, we have a res.render()
// 4. We pass res.render to args
// 	- the file we want to use
// 	- the data we want to send the that file
// 5. Express uses the node module for our specified view engine and parses the file
// 	- that means, it takes HTML, CSS, and JS and combines it with the node in the file
// 6. The final result is a compiled product that the browser can read

app.get("/", (req, res, next) => {
  // res.send("SUCCESS")
  res.render("index")
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})
