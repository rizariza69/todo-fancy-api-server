const express = require('express')
const app = express()
const env = require('dotenv').config()
const mongodb = require('mongodb')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const database = process.env.DATA_BASE
const user = require('./server/routes/users')
const todo = require('./server/routes/todo')

mongoose.connect(database,{ useNewUrlParser: true } )

app.use(morgan('combined'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.use('/user', user)
app.use('/todo', todo)





app.listen(3000, ()=>{
    console.log('express');
})