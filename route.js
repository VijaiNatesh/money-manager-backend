const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModels');


router.post('/signin', (req,res)=>{
   const signedUpUser = new signUpTemplateCopy({
        balance: req.body.balance,      
        income: req.body.income,
        expenses: req.body.expenses
    })
   signedUpUser.save()
   .then(data=>{
       res.json(data)
   })
   .catch(error =>{
       res.json(error)
   })
})

module.exports = router;