const express = require("express")

// create a new router obj
let userRouter = express.Router()

userRouter.get("/", (req, res, next) => {
  res.json({
    msg: "userRouter works!"
  })
})

module.exports = userRouter
