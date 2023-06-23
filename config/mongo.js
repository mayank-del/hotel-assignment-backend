const mongoose=require("mongoose");

module.exports=()=>{
    
    try{
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.DB_URL,()=>{
            console.log("Database connected");

        })
    }catch(e){
        console.log("Could not connect to database"+e);
    }
}