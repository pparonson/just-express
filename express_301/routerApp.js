const express = require("express")
const helmet = require("helmet")

const router = require("./router")
const userRouter = require("./userRouter")

const app = express()

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static("public"))

app.use("/", router)
app.use("/user", userRouter)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`)
})
