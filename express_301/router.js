const express = require("express")

// create a new router obj
let router = express.Router()

router.get("/", (req, res, next) => {
  res.json({
    msg: "Router works!"
  })
})

module.exports = router
