const express=require('express')
const {Show}=require('./../controller/main')
const router=express.Router()
router.route('/Home').get(Show)
module.exports=router