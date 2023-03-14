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

exports.Searchcourse=(req,res)=>{
    var RegEx = new RegExp(req.params.course_name, 'i');
    PopCourseSchema.find({ $or: [{ "course_name": RegEx }, { "type": RegEx }] })
    .then(result=>{ 
        res.status(200).json({
            Coursearch:result
        })
    }).catch(err=>{
        res.status(400).json({
            error:err
        });
    })
}