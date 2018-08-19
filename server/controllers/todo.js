const Todo = require('../models/todo')


module.exports = {
    create: (req,res) => {
        Todo
            .create({
                title : req.body.title,
                date : req.body.date,
                status: req.body.status      
            })

            .then(todo => {
                var mailer = require('node-mailer');

                new mailer.Mail({
                    from: 'riza.hacktiv8@gmail.com',
                    to: 'riza.riza69@gmail.com',
                    subject: 'Your Todo',
                    body: 'Please check your tuudoo Dashboard',
                    callback: function(err, data){
                        console.log(err);
                        console.log(data);
                    }
                });


                res.status(200).json({
                    msg:'create success',
                    todo
                })

            })

            .catch(err => {
                res.status(500).json({
                    err
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



