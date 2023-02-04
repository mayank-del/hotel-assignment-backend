const express=require("express");
const app=express()
const cors=require('cors');
const userRoute=require("./routes/User");
const hotelRoute=require("./routes/Hotels");
const managerRoute=require("./routes/Manager");
const roomRoute=require("./routes/Rooms");
require("dotenv").config();

app.use(cors());
app.use(express.json())

const connect=require("./config/mongo");

connect();

app.use("/api/users",userRoute);
app.use("/api/hotels",hotelRoute);
app.use("/api/manager",managerRoute);
app.use("/api/rooms",roomRoute);

app.listen(5000,()=>{
    console.log("Server started on port 5000...");
})
