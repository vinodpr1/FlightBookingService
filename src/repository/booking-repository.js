const {Booking}=require('../models/index');
const {FLIGHT_SERVICE_URL}=require('../config/serverConfig');
const axios=require('axios');

class BookingRepository{
   
    async createBooking(data){
        try {
                                       
              const fligtData=await axios.get(`${FLIGHT_SERVICE_URL}/${data.flightId}`);
             
              const price=fligtData.data.data.price;
              const availableSeat=fligtData.data.data.totalSeats;
              if(availableSeat<data.noOfSeats){
                console.log('seats are not sufficient');
                throw {error}
              }
              const response=await Booking.create({...data,price:(price*data.noOfSeats)});
              
            //   const x=await axios.patch(`${FLIGHT_SERVICE_URL}/${data.flightId}`,{...fligtData,totalSeats:totalSeats-data.noOfSeats});

              return response;

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









           
