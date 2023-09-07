import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    contactNumber:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    userType:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    image:String
},
{
    timestamps:true
})

const UserModel = mongoose.model('users', UserSchema)
export default UserModel