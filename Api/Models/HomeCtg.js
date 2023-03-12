const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const HomeCategSchema = new Schema({
    _id:{
        type:String,
        required:true,
    },
    categ_name:{
        type:String,
        required:true,
    },
    icon:{
        type:String,
        required:true,
    }
})
module.exports =mongoose.model('HomeCtg', HomeCategSchema,'HomeCtg');