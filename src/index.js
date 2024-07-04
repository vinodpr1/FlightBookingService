const express=require('express');
const bodyParser=require('body-parser');
const {PORT}=require('./config/serverConfig');

const StartBookingService=()=>{
      const app=express();
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({extended:true}));

      const appRoutes=require('./routes/index.js');
      app.use('/api', appRoutes);

      const BookingRepository=require('./repository/booking-repository.js');
      const repo=new BookingRepository();

     
      app.listen(PORT,async()=>{
          console.log(`App is running on port no ${PORT}`);
      })
}

StartBookingService();