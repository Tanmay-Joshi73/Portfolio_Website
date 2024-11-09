const fs=require('fs')
const { dirname } = require('path')
const LandingPage=fs.readFileSync('./public/Home.html','utf-8')
exports.Show=async(req,res)=>{
res.send(LandingPage)
}