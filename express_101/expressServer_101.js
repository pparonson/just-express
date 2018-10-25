// setInterval( () => console.log("1 second"), 1000)

const http = require("http")
const fs = require("fs")

const server = http.createServer( (req, res) => {
  console.log( JSON.stringify(req.body, null, 2) )

  res.writeHead(200, {"contentType": "text/html"})
  res.write("<h2>Hello World!</h2>")
  res.end()
})

const homepageHtml =
  fs.readFileSync("~/Downloads/mag-forecasts-gf-hunting.html")

console.log(homepageHtml);

server.listen(3000)
