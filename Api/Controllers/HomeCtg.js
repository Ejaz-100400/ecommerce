const HomeCategSchema = require('../Models/HomeCtg.js')

exports.DisplayCateg =(req,res)=>{
    HomeCategSchema.find()
    .then(result=>{
        res.status(200).json({
            HomeCateg:result
        })
    }).catch(err =>{
        res.status(400).json({
            error:err
        })
    })
}
