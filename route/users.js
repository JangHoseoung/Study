const express = require('express');
const router = express.Router();
const {User} = require('../model/db');

router.post('/save',(req,res,next)=>{
    console.log('일로옴',req.body);
    const {username,age,married} = req.body;
    married
    User.create({
        username,age,married
    }).then(()=>{
        res.send('저장하였습니다')
    }).catch((e)=>{
        res.send(` ${e} 저장실패했습니다`)
    })

})
module.exports = router;