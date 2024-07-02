const {Booking}=require('../models/index');
const axios=require('axios');

class BookingRepository{
   
    async createBooking(data){
        try {

              const flight=await axios.get(`http://localhost:3000/api/v1/flight/${data.flightId}`);
             
              if(flight.data.data.totalSeats < data.totalSeat){
                 console.log('requried seat is less than available seat');
                 throw {error}
              }

              console.log(flight.data.data);

              const response=await Booking.create({...data,price:(flight.data.data.price*data.totalSeat)});
              return response;
        } catch (error) {
             console.log('Booking can not be compleeted');
             throw {error}
        }
    }

}

module.exports=BookingRepository