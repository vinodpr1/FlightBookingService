const express=require('express');
const router=express.Router();

const piRoutes=require('./v1/index');

router.use('/v1',piRoutes);
module.exports=router;