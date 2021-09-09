const app = require('express')();
const express = require('express')
const path = require('path')
const { get,pushLink } = require('./urldatabase')

app.use(express.static(path.join(__dirname,"public")))
app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(express.raw())
// app.use(express.text())
app.get('/',async(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,"public","index.html"))
})

app.post('/shortern', async(req,res)=>{
    console.log(req.body)
    const url = unescape(req.body.url)
    // console.log(url)
    // res.send('ok')
    const shorturl = await pushLink(url)
    // res.json({url:`http://localhost:9070/${shorturl}`})
    res.send({url:`http://localhost:9070/${shorturl}`})
})

app.get('/:shorturl',async(req,res)=>{
    console.log(req.params)
    const { shorturl } = req.params
    const redirectLink = await get(shorturl)
    res.redirect(redirectLink)
})

module.exports = app //