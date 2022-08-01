const express = require('express')
const app = express()

//routes 

app.get('/mean', (req ,res)=>{
    console.log(req.query)
    return res.send("MEAN PAGE") 

})  

app.get('/median/', (req ,res)=>{
    console.log(req.query)
    return res.send("MEDIAN PAGE")

})  

app.get('/mode', (req ,res)=>{
    console.log(req.query)
    return res.send("MODE PAGE") 

})  


app.listen(3000, function() {
    console.log('App on port 3000, server started')
})