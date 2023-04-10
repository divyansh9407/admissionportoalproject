const express = require('express')
const app = express()
const port = 3000

// router path 
appp.get('/',(req,res) =>{
    res.send('hello world!')
})
appp.get('/about',(req,res) =>{
    res.send('divyansh agrawal!')
})
appp.get('/team',(req,res) =>{
    res.send('hi devu! ')
})



