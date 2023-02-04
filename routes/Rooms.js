const router=require("express").Router();
const {Rooms}=require("../models/Rooms");

router.get("/",async(req,res)=>{
    const data=await Rooms.find({});
    res.status(200).send(data);
})

router.post("/book",async(req,res)=>{

    const data=await new Rooms({
        hotelname:req.body.hotelname,
        hotelid:req.body.hotelid,
        roomno:req.body.roomno,
        username:req.body.username,
        uid:req.body.uid,
        email:req.body.email,
        phone:req.body.phone,

    }).save();
    res.status(200).send(data);
})

module.exports=router

