const express=require('express')
const app=express()
const bodyParser=require('body-parser')
require("./src/db/conncetion")
const port=process.env.PORT|| 5000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
const Notification=require("./src/db/models/notification_models")

const notificationRouter=require('./src/router/notification')
app.use(notificationRouter)



app.listen(port,()=>{
    console.log("server started....");
})