const express=require('express');
const router=express.Router();

router.get('/contacts',(req,res,next)=>{
   res.send('retriving the contact list');
});

module.exports=router;