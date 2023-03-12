const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PopCourseSchema = new Schema({
    _id:{
        type:String,
        required:true,
    },
    course_name:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
    },
    duration:{
        type:String,
        required:true,
    },
    rating:{
        type:String,
        required:true,
    }

})
module.exports =mongoose.model('PopCourse', PopCourseSchema,'PopCourse');