import express from 'express'
import {  createBusWithOwner, deleteBus, getAllBusses, getAllBussesOwn, getBus, success, updateBus } from '../Controllers/BusController.js'
import { authMiddleware } from '../middlewares/authMiddleware.js';
import upload from '../middlewares/MulterMiddleware.js';

const BusRouter = express.Router()

BusRouter.use(authMiddleware)
BusRouter.get('/',getAllBussesOwn);
BusRouter.get('/:id',getBus);
BusRouter.post('/create',upload.single('bus-image') , createBusWithOwner)
BusRouter.put('/:id',updateBus);
BusRouter.post('/:id',deleteBus);

export default BusRouter;