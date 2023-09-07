import express from 'express'
import { loginUser, registerUser, viewAllPassenger, viewUser,editUser } from '../Controllers/UserController.js'

const router = express.Router()

router.post('/create', registerUser)
router.put('/update/:id', editUser)
router.get('/login', loginUser)
router.get('/', viewAllPassenger)
router.get('/:id', viewUser)

export default router