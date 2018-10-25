const express = require("express")
const helmet = require("helmet")

const app = express()

// serve static files
app.use( express.static("./public") )
// parse json and urlencoded data into req.body
app.use( express.json() )
app.use( express.urlencoded({extended:false}) )

app.get("/", (req, res, next) => {
  res.send("SUCCESS")
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})
