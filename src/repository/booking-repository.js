const {Booking}=require('../models/index');
const {FLIGHT_SERVICE_URL}=require('../config/serverConfig');
const axios=require('axios');

class BookingRepository{
   
    async createBooking(data){
        try {
              
              const flightId=data.flightId;
              const flightDataURL=`${FLIGHT_SERVICE_URL}/api/v1/flight/${flightId}`
              const response=await axios.get(flightDataURL);
              const flightData=response.data.data;
              if(flightData.totalSeats<data.totalSeats){
                 console.log('Booking can not be compleeted bacause of un-sufficient seats');
                 throw {error}
              }
              let priceOfFlight=flightData.price;
              let totalPrice=data.totalSeats*priceOfFlight;
              
              const updateFlightRequestURL=`${FLIGHT_SERVICE_URL}/api/v1/flight/${flightId}`
              await axios.patch(updateFlightRequestURL ,{totalSeats : flightData.totalSeats-data.totalSeats} );
              

              let bookingPayload={...data,price:totalPrice,status:'Booked',totalSeat:data.totalSeats};
              const booking=await Booking.create(bookingPayload);
              return booking;

        } catch (error) {
             console.log('Booking can not be compleeted');
             throw {error}
        }
    }

}

module.exports=BookingRepository









           
           
 //   const flight=await axios.get(`http://localhost:3000/api/v1/flight/${data.flightId}`);
             
            //   if(flight.data.data.totalSeats < data.totalSeat){
            //      console.log('requried seat is less than available seat');
            //      throw {error}
            //   }

            //   console.log(flight.data.data);









           
