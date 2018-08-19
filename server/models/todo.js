const mongoose = require('mongoose')
const Schema = mongoose.Schema


const todoSchema =  new Schema({
    title : String,
    date : String,
    status: {
        type : String,
        default: false
    }      
},
{
    timestamps: true
})

const Todos = mongoose.model('Todo', todoSchema)

module.exports = Todos