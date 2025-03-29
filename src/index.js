const express=require('express');
const bodyParser=require('body-parser');
const {PORT}=require('./config/serverConfig');

const StartBookingService=()=>{
      const app=express();
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({extended:true}));

      app.get("/",(req, res)=>{
        res.status(200).json({Health:"Book flight endpoints"});
      })
    
    
      app.listen(3300,async()=>{
          console.log("Book Flight 3300");
      })
}

StartBookingService();