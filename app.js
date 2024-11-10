const express=require('express')
const app=express()
const home_routes=require('./routes/router')
const path=require('path')
app.use('/JS', express.static(path.join(__dirname, 'public/JS')))
app.use('/Images', express.static(path.join(__dirname, 'public/Images')))
app.use('/CSS', express.static(path.join(__dirname, 'public/CSS')))
app.use('/',home_routes)
app.listen(8000,'0.0.0.0',()=>{
    console.log('hey i am listening to this server bro')
})