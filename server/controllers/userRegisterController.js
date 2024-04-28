import UserRegister from "../models/UserRegister.js";



export const register = async(req, res,next)=>{
     const { fullname, email, mobileNo} = req.body;

     const newUser  = new UserRegister({fullname, email, mobileNo});
     try {
        await newUser.save();
        res.status(201).json(newUser)
     } catch (error) {
        next(error)
     }
}