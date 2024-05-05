const express = require("express")

const route = express.Router()

route.get("/add-product",(req,res,next)=>{
    res.send(`<form action="/admin/product" method="POST">
    <input type="text" name="product">
    <input type="number" name="size" placeholder="Size">
    <button type="submit">send</button>
    </form>`)   
})

route.post("/product",(req,res,next)=>{
    console.log(req.body)
    res.redirect("/")
})

module.exports = route