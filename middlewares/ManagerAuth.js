const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const managerAuthenticate = async (req, res, next) => {
  try {
    // console.log(req.headers)
    const token = req.headers["authorization"].split(" ")[1];
    const verifyToken = await jwt.verify(token, process.env.MANAGER,(err,user)=>{
        if (err) res.status(403).send( "Token is not valid!");
    })
    
    next();
  } catch (err) {
    //console.log(verifyToken)

    res.status(401).send("Unauthorized user");
    console.log(err);
  }
};
module.exports = managerAuthenticate;