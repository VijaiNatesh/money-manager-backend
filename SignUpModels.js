const mongoose = require ("mongoose");

const signUpTemplate = new mongoose.Schema({
    balance:{
        type:"number",
        required:true
    },
    income:{
        type:"number",
        required:true
    },
    expenses:{
        type:"number",
        required:true
    }  
   
})

module.exports = mongoose.model('mytable', signUpTemplate);