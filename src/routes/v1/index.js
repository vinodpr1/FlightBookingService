const express=require('express');
const router=express.Router();

const BookingController=require('../../controllers/booking-controller');

router.post('/createbooking', BookingController.createBooking);


module.exports=router;