const express = require("express")

const app = express()

// all is an Express method and takes 2 args
// 1. route
// 2. callback to run if route is requested
app.all("*", (req, res) => {
  // Express handles the basic headers
  // res.writeHead(200, {"contentType": "text/html"})
  res.send("<h2>SUCCESS</h2>")
})

const PORT = 3000
app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`))
