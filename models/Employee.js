//employee models

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    namesupplier:{
        type:String 
    },
    designation:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    filenam:{
        type:String
    }

}, {timestamps: true})

const Employee = mongoose.model('Employee', employeeSchema)
module.exports= Employee