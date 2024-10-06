import User from "../model/userModel.js";

export const allUser = async(req,res)=>{
    try{
        const userData = await User.find();
        if(!userData){
            return res.status(404).send({
                success:false,
                message:"No user"});
        }
        res.status(200).json({
            success:true,
            message:"all user fetched successfully",
            userData
        });
    }
    catch(error){
        res.status(500).send({
            success:false,
            message:"Something went wrong",
            error
        });
    }
}