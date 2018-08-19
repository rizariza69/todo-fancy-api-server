

const aunthetication = (req,res,next) => {
    let token = req.headers.token

    if(token){
        
        next()
    }else{
        res.status(401).json({
            msg: 'error'
        })

    }





}

module.exports = aunthetication