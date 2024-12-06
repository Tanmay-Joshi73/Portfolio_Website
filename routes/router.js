const express=require('express')
const {Show,FetchInfo,DeleteAll}=require('./../controller/main')
const router=express.Router()
router.route('/').get((req,res)=>{
    res.redirect('/Home')
})
router.route('/Fetch').post(FetchInfo)
router.route('/Home').get(Show)
router.route('/DeleteAll').delete(DeleteAll)
module.exports=router