const BookingRepository=require('../repository/booking-repository');
const bookingRepository=new BookingRepository();

class BookingService{

   async createBooking(data){
      try {
         const response=await bookingRepository.createBooking(data);
         return response;
      } catch (error) {
          console.log('Error has occured in service layer');
          throw {error};
      }
   } 

}

module.exports=BookingService;