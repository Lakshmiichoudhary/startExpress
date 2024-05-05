const express = require("express")
const path = require("path")

const route = express.Router()

route.get("/contactus",(req,res,next) => {
    res.sendFile(path.join(__dirname,"../","views","ContactUS.html"))
})

route.post("/sucess",(req,res,next) => {
    res.send(`<h1>Form sucessfully filled</h1>`)
})


module.exports = route