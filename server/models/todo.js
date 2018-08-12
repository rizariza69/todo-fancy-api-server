const mongoose = require('mongoose')
const Schema = mongoose.Schema


const todoSchema =  new Schema({
    titel : String,
    description : String,
    dueDate : String,
    status: {
        type : String,
        default: 'not done'
    }      
},
{
    timestamps: true
})

const Todos = mongoose.model('Todo', todoSchema)

module.exports = Todos