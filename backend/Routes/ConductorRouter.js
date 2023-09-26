
import { Router } from "express";
import { LoginCon, checkAccExist, createConductor, getConAcc, updateConductor } from "../Controllers/ConductorController.js";
const ConductorRouter = Router()

ConductorRouter.post('/',createConductor)
ConductorRouter.get('/:username', checkAccExist)
ConductorRouter.get('/get/:username', getConAcc)
ConductorRouter.post('/login',LoginCon)
ConductorRouter.put('/:username', updateConductor)

export default ConductorRouter