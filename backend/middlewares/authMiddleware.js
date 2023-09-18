import jwt from "jsonwebtoken";
import UserModel from "../Models/UserModel.js";
//import AdminModel from '../Models/AdminModel.js';

export const authMiddleware = async (req, res, next) => {
    let token;
    if(req?.headers?.authorization?.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
        try{
           if(token){
            const decoded = jwt.verify(token, process.env.SECRET);
            const user = await UserModel.findById(decoded?.id);
            req.user = user;
            next();
           }
        }catch(err){
            res.status(500).json({error: "Authorized token expired. Please login again."})
        }
    }else{
        res.status(500).json({error: "There is no token attached to header Please Login Again"})
    }
};