const router=require("express").Router();
const {Users}=require("../models/Users");


router.post("/login",async(req,res)=>{
    try{
        const manager=await Users.findOne({email:req.body.email})

        if(!manager){
            res.status(404).send({message:"No manager with this email exists"})
        }
        if(manager.isManager===false){
            res.status(401).send("Only Manager is allowed to access this page..")
        }
        if(req.body.password!==manager.password){
            res.status(401).send({message:"wrong Password"})
        }

        const token =manager.managerToken();
        res.status(200).send({ data: token, message: "Welcome to Manager's Console." });
        
    }catch(e){
		res.status(500).send({ message: e });
    }
});

module.exports=router;