const User = require('../models/users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


module.exports = {
    register: (req,res) => {
        let {name,email} = req.body
        let salt = bcrypt.genSaltSync(8)
        let hash = bcrypt.hashSync(req.body.password, salt)
        User
        .find({
            email:email
        })
        .then(user =>{
            // console.log(user);
            
            if(user.length === 0){
                User.create ({
                    name: req.body.name ,
                    email : req.body.email,
                    password : hash
                })
                .then(newUser => {
                    res.status(200).json({
                        msg: 'register success',
                        data: newUser
                    })
                })
                .catch(err => {
                    res.status(500).json(err.message)
                })
            }else{
                res.status(500).json({
                    msg:"already registers"
                })
            }
        })
    },
    login : (req, res) => {
        
        var {email, password} = req.body
        User
        .findOne({
            email : email
        })
        .then(user => {
            let {email,password} = req.body

            User
                .findOne({
                    email:email
                })

                .then(user => {
                    if(user){
                        console.log(user)
                        let checkPass = bcrypt.compareSync(password,user.password)
                        if(checkPass){
                            let token = jwt.sign({ id: user._id, name: user.name},'muhammad-riza')
                            res.status(200).json({
                                msg:"login success",
                                token
                            })

                            .catch(err => {
                                console.log(err);
                                
                                res.status(500).json({
                                    msg:"error"
                                })
                            })
                        }

                    }
                })
            })  
    },
    findAll: (req,res) =>{
        User
            .find()
            .then(user => {
                res.status(200).json({
                    msg:'create success',
                    data: user
                })
            })

            .catch(err => {
                res.status(500).json({
                    msg:'error'
                })
            })
    },
    findOne: (req,res) => {
        User
            .findOne({
                id:req.params.id
            })
            .then(user => {
                res.status(200).json({
                    msg:'success find id',
                    data: user
                })
            })

            .catch(err => {
                res.status(500).json({
                    msg: 'error'
                })
            })

    },

    update: (req,res) => {
        User
            .update(
                {
                    _id:req.params.id
                },
                {$set:
                    {
                        email :req.body.email,
                        password : req.body.password,
                        name : req.body.name,
                    }
            })

            .then(user => {
                res.status(200).json({
                    msg:'update success',
                    data: user
                })
            })

            .catch(err => {
                res.status(500).json({
                    msg:'error'
                })
            })
    },

    delete: (req,res) => {
        User
            .deleteOne(
                {
                    _id:req.params.id
                })

            .then(user => {
                res.status(200).json({
                    msg: 'delete success',
                    data: user

                })
            })

            .catch(err => {
                res.status(500).json({
                    msg: 'error'
                })
            })
    },
    loginFb : (req,res) => {
        // console.log(req.body)
    
            let url_user_info = `https://graph.facebook.com/me?fields=id,name,email&access_token=`
            axios.get(url_user_info)
            .then(userFb => {
                
                User.findOne({
                    email: userFb.data.email
                })
                    .then(user => { 
                        if (user == null) {
                            User.create({
                                name: userFb.data.name,
                                email: userFb.data.email,
                                password: `${userFb.data.id}`
                            })
                            .then((newUser) => {
                               
                                let token = jwt.sign( { id: newUser._id, email: newUser.email },'muhammad-riza' )
                                res.status(201).json({
                                    message: `successfully registered`,
                                    token
                                })
                            })
                            .catch((err) => {
                                res.status(400).json({
                                    message: err.message
                                })
                            })
                        }else {
                            let token = jwt.sign( { id: user._id, email: user.email },'muhammad-riza' )
                            res.status(200).json({
                                message: `login successfully`,
                                token
                            })
                        }
                    })
                    .catch((err) => {
                        res.status(400).json({
                            message: err.message
                        })
                    })
            })
        

    }
}



