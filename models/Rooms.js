const mongoose=require("mongoose");

const RoomSchema=new mongoose.Schema({
    hotelname: {
        type: String,
        required: true,
    },
    hotelid: {
        type: String,
        required: true,
    },
    roomno: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    uid:{
        type: String,
        required: true, 
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
})

Rooms=mongoose.model("Room",RoomSchema)

module.exports={Rooms};