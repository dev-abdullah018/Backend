// const express = require('express');
// const chalk = require("chalk");
// const cors = require('cors')
// const app = express()

// // middleware
// app.use(express.urlencoded({extended:true}))
// app.use(express.json())
// app.use(cors());

// app.get('/', function (req, res) {
// //   res.send('Hello World') //1  //for  string
// //   res.json({
// //     message: "hello world"
// //   })   /// 2 // for json

// res.send('Hello World')
// })

// app.listen(8000 , ()=>{
//     console.log(chalk.bgRed("server is running on port 8000"));
// })

// // get 
// // set/update
// /// delete
// // post

// ////////////
// // api creation
// // security

///////////////////////////////////////////// 2
const express = require('express');
const chalk = require("chalk");
const cors = require('cors');
const userRouter = require("./controllars/userRouter");
const app = express()

// middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());

app.get('/',  userRouter)

app.listen(8000 , ()=>{
    console.log(chalk.bgRed("server is running on port 8000"));
})
