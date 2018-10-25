const express = require("express")

const app = express()



const PORT = 3000

app.get("/", (req, res) => {
  res.send("<h2>GET request: SUCCESS</h2>")
})

app.post("/", (req, res) => {
  res.send("<h2>POST request: SUCCESS</h2>")
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})
