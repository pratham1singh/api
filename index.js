const express= require('express')
var app= express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send({"name":"pratham"})
})

app.post('/hello',(req,res)=>{
    
    var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://singhpratham191:SCiZ2fxBUUjLuk0l@login.hunot0h.mongodb.net/";
const client =new MongoClient(url);

async function  connect(){
    const result= await client.connect()
    let db= await result.db('ogin')
    let db2= await db.collection('users')
    db2.insertOne(req.body)
}
connect()
})


app.listen(3000||process.env.PORT)
