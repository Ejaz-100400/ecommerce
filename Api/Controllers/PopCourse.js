const PopCourseSchema = require('../Models/PopCourse.js')

exports.DisplayPop =(req,res)=>{
    PopCourseSchema.find()
    .then(result=>{
        res.status(200).json({
            PopCateg:result
        })
    }).catch(err =>{
        res.status(400).json({
            error:err
        })
    })
}