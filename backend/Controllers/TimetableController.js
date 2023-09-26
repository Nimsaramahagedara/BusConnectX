import timetableModel from "../Models/Timetable.js"


export const createTimetable = async (req, res) => {
    //BusId , Array of Times are required
    const { id } = req.params
    try {
        const isExist = await timetableModel.findOne({ busId: id })
        if (isExist) {
            isExist.times = [...isExist.times, ...req.body.times]
            const result = await timetableModel.findOneAndUpdate({ busId: id }, isExist)
            res.status(200).json(result)

        } else {
            const result = await timetableModel.create(req.body)
            res.status(200).json(result)
        }

    } catch (error) {
        res.status(400).json(error)
    }

}

export const getAllTimetables = async (req, res) => {
    try {
        const result = await timetableModel.find()
        res.status(200).json(result)
    }catch (error) {
        console.log(error);
    }
}

export const getOwnTimetable = async (req, res) => {
    const { id } = req.params
    try {
        const result = await timetableModel.find({busId: id})
        res.status(200).json(result)
    }catch (error) {
        console.log(error);
    }
}