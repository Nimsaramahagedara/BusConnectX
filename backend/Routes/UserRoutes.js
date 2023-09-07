import express from 'express'
import { loginUser, registerUser, viewAllPassenger, viewUser } from '../Controllers/UserController.js'

const router = express.Router()

router.post('/create', registerUser)
router.get('/login', loginUser)
router.get('/allPassengers', viewAllPassenger)
router.get('/viewPassenger/:id', viewUser)

export default router