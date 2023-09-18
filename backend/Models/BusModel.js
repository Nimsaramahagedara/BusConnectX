import mongoose from "mongoose";
const Schema = mongoose.Schema;

const busSchema = mongoose.Schema({
    busName:{
        type: String,
        required: true
    },
    regNo:{
        type:String,
        required:true
    },
    routeNo:{
        type:String,
        required:true
    },
    from:{
        type:String
    },
    to:{
        type:String
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref:'users'
    },
    image:{
        type:String,
        default: "https://freepngdownload.com/image/thumb/bus-icon-png.png"
    }
},{timestamps: true})

const BusModel = mongoose.model('Busses', busSchema);
export default BusModel;