import mongoose from "mongoose";

const userRegisterSchema  = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    email:{
        type: String,
        required:true,
        unique: true
    },
    mobileNo:{
        type : Number ,
        unique : true,
        required : true
    }
},{timestamps:true})

const UserRegister = mongoose.model( 'UserRegister',userRegisterSchema);
export default UserRegister;