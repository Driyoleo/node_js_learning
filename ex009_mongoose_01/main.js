/*
 how to set up mongoose:

1> npm init -y
2> npm i mongoose 
3> type : module --package.json
4> import mongoose from "mongoose"
5> await mongoose.connect(<connection string of db>) note the connection string is not working so i do mongodb://127.0.0.1/todo
6> npm i express
7> start express server
6> models
--inside todo.js
7> import mongoose
8> made schema
--insdie main.js
9> import todo  
10> and use it as you want thorugh your browser



*/

import mongoose  from "mongoose";
import Express  from "express";
import { Todo } from "./model/todo.js";

let conn = await mongoose.connect("mongodb://127.0.0.1/todo");

const app = Express();
const port = 3000;

app.get('/',(req,res)=>{
    const todo = Todo({
        title : "drink water",
        desc : "hydrate yourself",
        IsDone : false
    });
    todo.save()

    res.send("hello world");
});


app.listen(port,()=>{
    console.log(`server running on http://localhost:3000/`);
});
