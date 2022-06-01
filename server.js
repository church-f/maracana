const express = require('express')
const path = require('path')
const http = require('http')   
const app = express()
const server = http.createServer(app)
const PORT = process.env.PORT || 3000

server.listen(PORT)

app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/home.html')
})