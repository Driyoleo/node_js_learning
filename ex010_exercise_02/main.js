import  Express  from "express";                                                    // imported express for use
import mongoose from "mongoose";                                                    // imported mongoose for db works
await mongoose.connect('mongodb://127.0.0.1/dumy_02');                              // connected db thorugh connection string

import {emp} from "./model/data.js";                                                // imported emp model from file data.js

// just starting the server at 4000
const app = Express();                  
const port = 4000;

// these set of code is important to parse the parameters of the req which you will get from the form in html.index
app.use(Express.json());
app.use(Express.urlencoded({
    extended : true
}))

// for get request
app.get('/',(req,res)=>{
    res.sendFile("public/index.html",{root: "C:"});                               
})

//for post request
app.post('/',(req,res)=>{
    const data = emp(req.body);                                                     // storing data 
    data.save();                                                                    // saving data in db
    res.sendFile("/public/index.html",{root: "C:"});                                // to reload the same page after send button is clicked
    console.log("done");                                                            // for verification of the process to be done

})

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}/`);
})



