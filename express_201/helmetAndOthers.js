const express = require("express")
const helmet = require("helmet")

const app = express()

// helmet adds security headers
app.use(helmet())

// app.use("/", (req, res, next) => {
//   console.log(`MIDDLEWARE: ${req.url}`);
// })

app.use( express.static("./public") )
app.use( express.json() )
app.use( express.urlencoded({extended:false}) )

app.post("/ajax", (req, res) => {
  // console.log(`ajax: ${JSON.stringify(req, null, 2)}`)
  console.log(req.body);
  // res.send sends content-type: text/html as default
  // res.send("<h2>Test Page</h2>")

  // changes response to content-type: application/json
  res.json("<h2>Test Page</h2>")
})

const PORT = 3000
app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))
