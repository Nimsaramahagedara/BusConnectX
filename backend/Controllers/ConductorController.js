import conductorModel from '../Models/ConductorModel.js'
import bcrypt from 'bcrypt'
import { createToken } from './UserController.js'

export const createConductor = async (req, res) => {
    try {
        const { busId, username } = req.body
        const isExist = await conductorModel.findOne({ username })
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(req.body.password, salt)
        req.body.password = hash
        if (isExist) {
            res.status(401).json({ error: 'Conductor account exist!' })
        } else {
            const result = await conductorModel.create(req.body)
            res.status(200).json(result)

        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export const checkAccExist = async (req, res) => {
    const { username } = req.params
    const isExist = await conductorModel.findOne({ username })
    if (isExist) {
        res.status(200).json({ isExist: true })
    } else {
        res.status(200).json({ isExist: false })
    }
}

export const getConAcc = async (req, res) => {
    const { username } = req.params
    const isExist = await conductorModel.findOne({ username })
    if (isExist) {
        res.status(200).json(isExist)
    } else {
        res.status(200).json(false)
    }
}

export const updateConductor = async (req, res) => {
    try {
        const { username } = req.body
        const isExist = await conductorModel.findOne({ username })
        if (isExist) {
            const result = await conductorModel.findOneAndUpdate({ username }, req.body)
            res.status(200).json(result);
        } else {
            res.status(401).json({ error: 'Conductor acc not found' })

        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// User login
export const LoginCon = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if the user exists
        const user = await conductorModel.findOne({ username });
        // Compare the provided password with the stored password
        if (!user) {
            throw Error('*Username does not exist!')
        } if (!username || !password) {
            throw Error('*All fields must be filled!')
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            res.status(401).json({ error: '*Username or password is incorrect!' })
        } else {
            const token = createToken(user._id)
            res.status(200).json({ user, token })
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}