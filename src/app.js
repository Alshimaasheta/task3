const express=require('express')
require('dotenv').config()
const app=express()
const port=process.env.PORT 

require('./db/mongodb')

app.use(express.json())

const reporterRouter = require('./router/reporter')
const  newRouter=require('./router/new')
app.use(reporterRouter)
app.use(newRouter)

app.listen(port,()=>{console.log('Server is running ' + port)})


