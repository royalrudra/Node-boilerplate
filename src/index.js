import express from 'express';
import constants from './config/constants.js';
import "./config/database";
import middlewaresConfig from "./config/middlewares"
const app = express();

import apiRouters from "./modules"

// const PORT = process.env.PORT || 3000;

middlewaresConfig(app);

app.get('/',(req,res)=>{
    res.send("hello world")
})

apiRouters(app);

app.listen(constants.PORT, err =>{
    if(err){
        throw err;
    }else {
        console.log(`server running on ${constants.PORT}`)
    }
})