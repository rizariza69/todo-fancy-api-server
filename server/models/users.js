const mongoose = require('mongoose')
// const Schema = mongoose.Schema


const userSchema =  mongoose.Schema({
    name: String,
    email : {
        type: String,
        unique: true
    },
    password: String,    
},
{
    timestamps: true
})

const Users = mongoose.model("User", userSchema)

module.exports = Users