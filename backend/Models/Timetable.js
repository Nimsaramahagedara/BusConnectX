import mongoose from 'mongoose'

const timetableSchema = mongoose.Schema({
    busId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'busses',
        unique: true
    },
    times:{
        type: Array,
        default:[]
    }

})

const timetableModel = mongoose.model('timetable', timetableSchema);
export default timetableModel;