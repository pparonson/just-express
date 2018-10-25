const express = require("express")
const path = require("path")

const app = express()

// app.use(express.static("./public"))

// /Users/preston.aronson/Documents/Workspaces_PersonalProjects/workspaces_js/just_express/nodeServer_101.html
console.log(path.join(__dirname + "/nodeServer_101.html"))

app.all("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/nodeServer_101.html"))
})

app.all("*", () => {
  res.send("<h2>Sorry, this page does not exist</h2>")
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})
