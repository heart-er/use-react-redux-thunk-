const express=require('express')
const fs=require('fs')
const path=require('path')

const app=express()
app.use(require('cors')())

const FILE = path.join(__dirname, 'server.json');


app.get('/list',async (req,res)=>{
  fs.readFile(FILE,(err,data)=>{
    res.json({
      status:true,
      message:JSON.parse(data)
    })
  })
})

app.listen(3001,()=>{
  console.log("success")
})