import mongoose from "mongoose";

let sch = new mongoose.Schema({
    name : String,
    salary : Number,
    city : String,
    IsManager : Boolean
})

export const emp = mongoose.model('Emp' , sch);