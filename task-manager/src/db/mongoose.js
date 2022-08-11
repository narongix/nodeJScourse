const mongoose = require('mongoose')

const username = "narongix";
const password = "bFCyuZ7nuiSYHUw";
const cluster = "cluster0.30aycfq";
const dbname = "task-manager-api";


mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);




