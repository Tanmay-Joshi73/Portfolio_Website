const express=require('express')
const app=express()
const mongoose=require('mongoose')
const home_routes=require('./routes/router')
const path=require('path')
const dotenv=require('dotenv').config('./env')
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/Images', express.static(path.join(__dirname, 'public/Images')))
app.use('/CSS', express.static(path.join(__dirname, 'public/CSS')))
app.use('/Videos', express.static(path.join(__dirname, 'public/Videos')))
app.use('/JS', express.static(path.join(__dirname, 'public/JS')))
app.use(express.json());
const MongoString=dotenv.parsed.local
// Connect to MongoDB
mongoose
  .connect(MongoString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

app.use('/',home_routes)

app.listen(8000,'0.0.0.0',()=>{
    console.log('hey i am listening to this server bro')
})