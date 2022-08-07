const mongoose = require('mongoose')
const username = "narongix";
const password = "bFCyuZ7nuiSYHUw";
const cluster = "cluster0.30aycfq";
const dbname = "task-manager-api";
const validator = require('validator');

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required:true,
//         trime:true
//     },
//     email:{
//         type:String,
//         required:true,
//         trim:true,
//         lowercase:true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is invalid')
//             }
//         }
//     },
//     password:{
//         type:String,
//         trim:true,
//         minlength:7,
//         required:true,
//         validate(value){
//             if(value.toLowerCase().includes('password')){
//                 throw new Error('Password cannot contain "password"')
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default:0,
//         validate(value){
//             if(value<0){
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     }
// })

// const me = new User({
//     name: 'narong   ',
//     email:'narongninth@gmail.com',
//     password:'phone098!'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

const Task = mongoose.model('Task',{
description:{
    type:String,
    required:true,
    trim:true,
},
completed:{
    type:Boolean,
    default:false
}
})

const task = new Task({
    description:'Eat Lunch',
    completed:false
})

task.save().then(()=>{
    console.log(task)
}).catch((error)=>{
    console.log(error)
})

