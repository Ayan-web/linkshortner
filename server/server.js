const app = require('express')();
const express = require('express')
const path = require('path')
const { get,pushLink } = require('./urldatabase')

app.use(express.static(path.join(__dirname,"public")))
app.use(express.json())
app.get('/',async(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,"public","index.html"))
})

app.post('/shortern', async(req,res)=>{
    const {url} = req.body
    const shorturl = await pushLink(url)
    res.send(`http://localhost:9070${shorturl}`)
})

app.get('/:shorturl',async(req,res)=>{
    console.log(req.params)
    const { shorturl } = req.params
    const redirectLink = await get(shorturl)
    res.redirect(redirectLink)
})

module.exports = app