const express=require('express')
const {Show,FetchInfo}=require('./../controller/main')
const router=express.Router()
router.route('/').get((req,res)=>{
    res.redirect('/Home')
})
router.route('/Fetch').post(FetchInfo)
router.route('/Home').get(Show)
module.exports=router