const express=require('express');
const bodyParser=require('body-parser');
const {PORT}=require('./config/serverConfig');

const StartBookingService=()=>{
      const app=express();
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({extended:true}));

      app.listen(PORT,()=>{
          console.log(`App is running on port no ${PORT}`);
      })
}

StartBookingService();