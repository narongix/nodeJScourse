//CRUD create read update delete
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = "mongodb+srv://narongix:bFCyuZ7nuiSYHUw@cluster0.30aycfq.mongodb.net/?retryWrites=true&w=majority"
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{useNewUrlParser: true},(error,client)=>{
    if(error){
       return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
})
