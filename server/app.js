require('dotenv').config()
const express = require('express')
const app = express()
const mongodb = require('mongodb')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const database = process.env.DATA_BASE
const user = require('./routes/users')
const todo = require('./routes/todo')

mongoose.connect(database,{ useNewUrlParser: true } )

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.use('/users', user)
app.use('/todo', todo)


app.listen(3000, ()=>{
    console.log('express');
})