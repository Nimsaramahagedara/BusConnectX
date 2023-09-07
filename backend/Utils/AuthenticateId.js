import jwt, { decode } from "jsonwebtoken";

export const AuthenticateId = (token) => {
           if(token){
            const decoded = jwt.verify(token, process.env.SECRET);
            //const admin = await UserModel.findById(decoded?.id);
            return decoded._id
        
           }else{
            res.status(500).json({error: "Pass Token to the AuthenticateId Function"})
        }
};