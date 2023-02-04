const router=require("express").Router();
const {Hotel}=require("../models/Hotels");
const managerAuth=require("../middlewares/ManagerAuth")


router.get("/",async(req,res)=>{
    const hotel=await Hotel.findOne({name:req.body.name});
    res.status(200).send({result:hotel})
})
router.get("/getall",async(req,res)=>{
    const hotel=await Hotel.find({});
    res.status(200).send({result:hotel})
})
router.post("/create",managerAuth,async(req,res)=>{
    await new Hotel({
        name:req.body.name,
        city:req.body.city,
        address:req.body.address,
        desc:req.body.desc,
        rating:req.body.rating,
        rooms:req.body.rooms,
        rent:req.body.rent,
    }).save();
    res.status(201).send("successfully created hotel")

})

router.post("/updaterooms/:id",async(req,res)=>{
    let id=req.params.id;
    const getroom=await Hotel.findById(id)
    let room=getroom.rooms
    let newrooms=room.shift()
    const updateroom=await Hotel.findByIdAndUpdate({_id:id},{rooms:room})
    res.status(200).send(updateroom)
})

router.post("/update/:id",managerAuth,async(req,res)=>{
    let rent=req.body.rent;
    let id=req.params.id;

    const update=await Hotel.findByIdAndUpdate({_id:id},{rent:rent});
    res.status(200).send(update);
})

router.post("/updaterate/:id",managerAuth,async(req,res)=>{
    let rating=req.body.rating;
    let id=req.params.id;

    const update=await Hotel.findByIdAndUpdate({_id:id},{rating:rating});
    res.status(200).send(update);
})



module.exports=router;