const express=require('express')
const router=express.Router()
const bodyParser=require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())
router.use(express.json())
const Notification=require("../db/models/notification_models")
router.post('/notification',async(req,res)=>{
    try{
        console.log(req.body)
        const notification=new Notification(req.body)
        const createnotification=await notification.save()
        
        res.status(201).send(createnotification)
        
    }
    catch(e){
        res.status(400).send(e)
    }
})

    router.get("/notification",async(req,res)=>{
        try{
            const notificationData=await Notification.find()
            res.send(notificationData)
            
        }
        catch(e){
            res.status(401).send(e)
        }
    })