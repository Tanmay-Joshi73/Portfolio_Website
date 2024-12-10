const fs=require('fs')
const LandingPage=fs.readFileSync('./public/Home.html','utf-8')
const UserTour=require('../Models/User_Model')
const {SendEmail,EmailVerifier}=require('../function-controller/Controller_Function')
const validator=require('email-validator')
exports.Show=async(req,res)=>{
res.send(LandingPage)
}
exports.FetchInfo=async(req ,res)=>{
    try{
    
const{Username,Email,Message}= req.body.data;
const user=await UserTour.findOne({email:Email})
// if(!validator.validate(Email)){
    
//     // res.status(404).json({Status:"Success",Message:"Please Check Your Email"})
//     return;
// }
if(!EmailVerifier(Email)){
    return ;
}
await SendEmail(Username,Email,Message)
if(user){
    user.message=Message;
    user.save()
    return 

}

const data=await UserTour.create({
    name:Username,
    email:Email,
    message:Message
})
res.send(data)
    }catch(err){
        console.log(err)
    }

}
exports.DeleteAll=async(req,res)=>{
   await UserTour.deleteMany()
}