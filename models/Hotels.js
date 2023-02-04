const mongoose=require("mongoose");

const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    
    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    
    desc: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    rooms: {
        type: [String],
    },
    rent: {
        type: Number,
        required: true,
    },
    
});

Hotel= mongoose.model("Hotel", HotelSchema);
module.exports={Hotel};