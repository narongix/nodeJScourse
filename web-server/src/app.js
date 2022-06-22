const express = require('express')
const path = require('path')

const app = express()
const publicDirectoryPath = path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))
app.set('view engine','hbs')

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Andrew Mead'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About me',
        name:'Andrew Mead'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help',
        helpText:'This is some helpful text'
    })
})


app.get('/weather',(req,res)=>{
    res.send('Weather')
})
app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})