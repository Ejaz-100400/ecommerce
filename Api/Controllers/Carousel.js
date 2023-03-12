const CarouselCategSchema = require('../Models/Carousel.js')

exports.DisplayCarousel =(req,res)=>{
    CarouselCategSchema.find()
    .then(result=>{
        res.status(200).json({
            Carousel:result
        })
    }).catch(err =>{
        res.status(400).json({
            error:err
        })
    })
}