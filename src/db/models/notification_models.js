const mongoose=require('mongoose')
const notificationSchema=new mongoose.Schema({
    sub:{
        type : String,
        required:true
    },
    
       body:{
           type:String,
           required:true,
           
       } ,
       view:{
           type:Boolean,
           required:true,
       },
})

//we will create new collection 
const Notification=new mongoose.model("Notification",notificationSchema)
module.exports=Notification