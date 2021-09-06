const app = require('express')();
const express = require('express')
const path = require('path')

app.use(express.static(path.join(__dirname,"public")))
app.get('/',async(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,"public","index.html"))
})

module.exports = app