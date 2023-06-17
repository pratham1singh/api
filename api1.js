const express= require('express')
var app= express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send({"name":"pratham"})
})

app.post('/hello',(req,res)=>{
    
    var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017";
const client =new MongoClient(url);

async function  connect(){
    const result= await client.connect()
    let db= await result.db('login')
    let db2= await db.collection('users')
    db2.insertOne(req.body)
}
connect()
})


app.listen(process.env.PORT)
