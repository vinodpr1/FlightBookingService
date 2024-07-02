const BookingService=require('../services/booking-service');
const bookingService=new BookingService();

const createBooking=async(req,res)=>{
       try {
        const response=await bookingService.createBooking(req.body);
        return res.status(200).json({
            data:response,
            success:true,
            message:'Booking has done successfully',
            error:{}
        })        
       } catch (error) {
        return res.status(500).json({
            data:null,
            success:false,
            message:'Booking can not done successfully',
            error:error
        }) 
       }
}

module.exports={
    createBooking
}