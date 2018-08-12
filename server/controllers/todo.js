const Todo = require('../models/todo')


module.exports = {
    create: (req,res) => {
        Todo
            .create({
                titel : req.body.title,
                description : req.body.description,
                dueDate : req.body.dueDate,      
            })

            .then(todo => {
                res.status(200).json({
                    msg:'create success',
                    todo
                })
            })

            .catch(err => {
                res.status(500).json({
                    msg:'error'
                })
            })
    },
    findAll: (req,res) =>{
        Todo
            .find()
            .then(todo => {
                res.status(200).json({
                    msg:'create success',
                    data: todo
                })
            })

            .catch(err => {
                res.status(500).json({
                    msg:'error'
                })
            })
    },
    findOne: (req,res) => {
        Todo
            .findOne({
                id:req.params.id
            })
            .then(todo => {
                res.status(200).json({
                    msg:'success find id',
                    data: todo
                })
            })

            .catch(err => {
                res.status(500).json({
                    msg: 'error'
                })
            })

    },

    update: (req,res) => {
        Todo
            .update(
                {
                    _id:req.params.id
                },
                {$set:
                    {
                    titel : req.body.title,
                    description : req.body.description,
                    dueDate : req.body.dueDate,
                    }
            })

            .then(todo => {
                res.status(200).json({
                    msg:'update success',
                    data: todo
                })
            })

            .catch(err => {
                res.status(500).json({
                    msg:'error'
                })
            })
    },

    delete: (req,res) => {
        Todo
            .deleteOne(
                {
                    _id:req.params.id
                })

            .then(todo => {
                res.status(200).json({
                    msg: 'delete success',
                    data: todo

                })
            })

            .catch(err => {
                res.status(500).json({
                    msg: 'error'
                })
            })
    }
}



