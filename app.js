const express = require('express')
const app = express()
const port = 3000

// router path 
app.get('/',(req,res) =>{
    res.send('hello world!')
})
app.get('/about',(req,res) =>{
    res.send('divyansh agrawal!')
})
app.get('/team',(req,res) =>{
    res.send('hi devu! ')
})


app.listen(port, () => {
    console.log(`localhost ${port}`)
  })