const http = require("http")
const fs = require("fs")
const path = require("path")

const server = http.createServer( (req, res) => {
  console.log( req.url )
  if (req.url === "/") {
    res.writeHead(200, {"contentType": "text/html"})
    // res.write("<h2>This is the Home Page</h2>")
    const homepageHtml =
      fs.readFileSync("/Users/preston.aronson/Downloads/mag-forecasts-gf-hunting.html")
    res.write(homepageHtml)
    res.end()
  } else {
    res.writeHead(200, {"contentType": "text/html"})
    res.write("<h4>Sorry, this isn't the page you're looking for..</h4>")
    res.end()
  }

})



server.listen(3000)
