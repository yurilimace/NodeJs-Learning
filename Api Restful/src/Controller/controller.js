const  express = require('express')
const User = require('../Model/user')
const multer = require('multer')
var fs = require('fs')
const upload = multer({dest:'upload/'})

const router = express.Router()

router.post('/check',upload.single('image'),function(req,res,next){
    try{
        const New = new User({
            name:req.body.name,
            image:{data:fs.readFileSync(req.file.path),contentType:'image/png'}
        })
        New.save()
        res.send("user created")
    }
    catch(err){
        return res.status(400).send({error:"something wrong "})
    }
})

router.get('/check',function(req,res,next){
    //to exclude some field, put - before name of field
    User.find({},function(err,users){
        if(err){
            res.send("can not get users list on database")
        }
        else{
            console.log()
            res.send(users)
        }
    })
})

router.put('/check',upload.none(),function(req,res,next){
    User.findOneAndUpdate({name:req.body.name},{name:req.body.update},function(err,Users){
        if(err){
            res.send("failed to update")
        }
        else{
            res.send('update success')
        }

    })
})

router.delete('/check',upload.none(),function(req,res,next){
    User.findOneAndDelete({name:req.body.name},function(err,Users){
        if(err){
            res.send('não foi possivel excluir')
        }
        else{
            res.send('Excluido').json()
            console.log(req.body.name)
        }

    })
})

module.exports = server => server.use('/api',router)