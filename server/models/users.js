const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema =  new Schema({
    email : {
        type : String,
        unique : true,
        email : true
    },
    password : String,
    name : String,    
},
{
    timestamps: true
})

const Users = mongoose.model('User', userSchema)

module.exports = Users