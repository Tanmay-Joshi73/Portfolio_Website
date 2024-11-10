const express=require('express')
const {Show}=require('./../controller/main')
const router=express.Router()
router.route('/').get((req,res)=>{
    res.redirect('/Home')
})
router.route('/Home').get(Show)
module.exports=router