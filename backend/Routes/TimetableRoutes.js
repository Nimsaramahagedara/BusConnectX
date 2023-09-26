import express from 'express'
import { createTimetable, getAllTimetables, getOwnTimetable } from '../Controllers/TimetableController.js'
const timetableRouter = express.Router()

timetableRouter.get('/',getAllTimetables)
timetableRouter.get('/:id',getOwnTimetable)
timetableRouter.post('/:id',createTimetable)

export default timetableRouter