const router=require("express").Router();
const {Users}=require("../models/Users");

router.get("/",async(req,res)=>{
    const data=await Users.find({})
    res.status(200).send(data)
})

router.post("/signup",async(req,res)=>{
    try{
        const user=await Users.findOne({email:req.body.email})
        if(user){
            res.status(409);
            return res.send({messgae:"User with this email already exists"});
        }
        await new Users({name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            password:req.body.password,
            address:req.body.address,
            
        }).save();
        res.status(201).send("successfully created user")
    }catch(err){
		res.status(500).send({ message: err });
    }
})

router.post("/login",async(req,res)=>{
    try{
        const user=await Users.findOne({email:req.body.email})

        if(!user){
            
            res.status(401).send({message:"No user with this email exists, Please signup"});
           
        }
        if(req.body.password!==user.password){
            res.status(401).send({message:"Wrong Password."});

        }
        const token = user.userToken();
        res.status(200).send({ tokendata: token, message: "logged in successfully",user });

    }catch{
		//res.status(500).send({ message: "login failed!" });

    }
})

module.exports=router