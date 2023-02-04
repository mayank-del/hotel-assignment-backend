const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phone: {
            type: String,
            required: true,
            
        },
        password: {
            type: String,
            required: true,
        },
        address:{
            type:String,
            required:true,
        },
        isManager: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

UserSchema.methods.userToken=function(){
    const token=jwt.sign({_id:this._id},process.env.USER,{
        expiresIn:"1h"
    })
    return token;
}

UserSchema.methods.managerToken=function(){
    const mgrtoken=jwt.sign({_id:this._id},process.env.MANAGER,{
        expiresIn:"2h"
    })
    return mgrtoken;
}

Users= mongoose.model("Users", UserSchema);
module.exports={Users};