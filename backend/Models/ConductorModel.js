import mongoose from "mongoose";

const conductorSchema = mongoose.Schema({
    busId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'busses'
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    name:{
        type: String
    },
    nic:{
        type: String
    },
    contactNo:{
        type:String
    },
    regNo:{
        type:String
    }
})

const conductorModel = mongoose.model('conductor', conductorSchema)
export default conductorModel