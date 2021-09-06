const app = require('./server/server')
const PORT = 9070
app.listen(PORT,()=>{
    console.log(`listen on http://localhost:${PORT}`)
})