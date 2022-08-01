const express = require('express')
const app = express()

const { convertAndValidateNumsArray, findMode, findMean, findMedian } = require('./helpers');


//routes 

app.get('/mean', (req ,res, next)=>{
    let numsAsStrings = req.query.nums.split(',');
    // check if anything bad was put in
    let nums = convertAndValidateNumsArray(numsAsStrings);

    let result = {
        operation: "mean",
        result: findMean(nums)
    }
    
    return res.send(result);

})  

app.get('/median/', (req ,res, next)=>{
    let numsAsStrings = req.query.nums.split(',');
    // check if anything bad was put in
    let nums = convertAndValidateNumsArray(numsAsStrings);
    let result = {
        operation: "median",
        result: findMedian(nums)
    }
    
    return res.send(result);

})  

app.get('/mode', (req ,res, next)=>{
    let numsAsStrings = req.query.nums.split(',');
    // check if anything bad was put in
    let nums = convertAndValidateNumsArray(numsAsStrings);
    let result = {
        operation: "mode",
        result: findMode(nums)
    }
    
    return res.send(result);

})  


app.listen(3000, function() {
    console.log('App on port 3000, server started')
})