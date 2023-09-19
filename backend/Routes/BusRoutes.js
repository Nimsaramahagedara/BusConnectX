import express from 'express'
import { createBus, createBusWithOwner, deleteBus, getAllBusses, getAllBussesOwn, getBus, updateBus } from '../Controllers/BusController.js'
import { authMiddleware } from '../middlewares/authMiddleware.js';
const BusRouter = express.Router()

BusRouter.use(authMiddleware)
BusRouter.get('/',getAllBussesOwn);
BusRouter.get('/:id',getBus);
BusRouter.post('/create',createBusWithOwner);
BusRouter.put('/:id',updateBus);
BusRouter.post('/:id',deleteBus);

export default BusRouter;