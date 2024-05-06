
exports.addContact = (req,res,next) => {
    res.sendFile(path.join(__dirname,"../","views","ContactUS.html"))
}

exports.addSucess = (req,res,next) => {
    res.send(`<h1>Form sucessfully filled</h1>`)
}
