const express = require('express');
const HomeCategController =require('../Controllers/HomeCtg.js')
const PopCategController = require('./../Controllers/PopCourse.js')
const CarouselController = require('./../Controllers/Carousel.js')
const router = express.Router();
router.get('/CourseCateg',HomeCategController.DisplayCateg)
router.get('/PopCateg',PopCategController.DisplayPop)
router.get('/Carousel',CarouselController.DisplayCarousel)
module.exports = router;
