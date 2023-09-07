import UserModel from "../Models/UserModel.js";
import validator from 'validator'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const createToken = (_id)=>{
    return jwt.sign({_id}, process.env.SECRET, {expiresIn:'3d'})
}

// create User
export const registerUser = async(req,res)=>{

    const{firstName, lastName, contactNumber, gender, userType, email, password, image} = req.body
    if(image == ''){
        image = 'Null';
    }
    const exists = await UserModel.findOne({email})
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)

    try{
        if(!firstName || !lastName|| !contactNumber || !gender || !userType || !email || !password){
            throw Error('*All fields must be filled!')
        }if(contactNumber.length!==10){
            throw Error('*Contact Number Must be 10 digits!')
        }if(!validator.isStrongPassword(password)){
            throw Error('*Enter a strong password!')
        }if(!validator.isEmail(email)){
            throw Error('*Email is not valid!')
        }if(exists){
            throw Error('*Account Already Exists!')
        }else{
            const user = await UserModel.create({firstName, lastName, contactNumber, gender, userType, email, password:hash, image})
            const token = createToken(user._id)
            res.status(200).json({user,token})
        }

    }catch(error){
        res.status(401).json({error:error.message})
    }
}

//loginUser

export const loginUser = async(req,res)=>{
    const{email,password} = req.body

    const user = await UserModel.findOne({email})
    const match = bcrypt.compare(password,user.password)
    try{
        if(!user){
            throw Error('*Email does not exist!')
        }if(!email || !password){
            throw Error('*All fields must be filled!')
        }if(!match){
            throw Error('*Username or password is incorrect!')
        }else{
            const token = createToken(user._id)
            res.status(200).json({user,token})
        }

    }catch(error){
        res.status(500).json({error:error.message})
    }
}

// View All Passengers(Admin)
export const viewAllPassenger = async(req,res)=>{
    try{
        const passengers = await UserModel.find()
        res.status(200).json(passengers)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

// View User specifically(Admin)

export const viewUser= async(req,res)=>{
    const id = req.params.id

    try{
        const user = await UserModel.findById(id)
        res.status(200).json(user)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}