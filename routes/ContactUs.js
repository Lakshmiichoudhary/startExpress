const express = require("express")
const path = require("path")

const contactController = require("../controlers/contact")

const route = express.Router()

route.get("/contactUs",contactController.addContact)

route.post("/sucess",contactController.addSucess)


module.exports = route