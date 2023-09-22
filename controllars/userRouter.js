const express = require('express');
const router = express.Router();


router.get("/" , (req, res)=>{
    //    res.send("hello bangaladesd") //3
       res.json([
        {
            name: 'rimon'
        },
        {
            name: 'azmir'
        },
        {
            name: 'sohel'
        },
        {
            name: 'rakib'
        },
        {
            name: 'sujon'
        }
       ])
})

module.exports = router