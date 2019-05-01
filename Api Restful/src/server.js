const express = require('express');
const bodyparser = require('body-parser');
const allowCors = require('./cors')
const port = 3005;

const server = express()

server.use(bodyparser.json())
server.use(bodyparser.urlencoded({extended:false}))
server.use(allowCors)
require('./Controller/controller')(server)

server.listen(port,function(){
    console.log(`server ruuning on port ${port}`)
})

