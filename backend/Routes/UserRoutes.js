import express from 'express'
import { LoginUser, registerUser, viewAllPassenger, viewUser,editUser } from '../Controllers/UserController.js'

const router = express.Router()

router.post('/create', registerUser)
router.put('/update/:id', editUser)
router.post('/login', LoginUser)
router.get('/', viewAllPassenger)
router.get('/:id', viewUser)

export default router