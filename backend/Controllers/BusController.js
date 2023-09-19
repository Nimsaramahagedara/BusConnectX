import BusModel from "../Models/BusModel.js"
import { verifyToken } from "../Utils/VerifyToken.js";
//GET ALL BUSSES
export const getAllBusses = async (req, res) => {
    try {
        const result = await BusModel.find();
        if (result) {
            res.status(200).json(result);
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

//GET Specific Bus
export const getBus = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await BusModel.findById(id)
        if (result) {
            res.status(200).json(result);
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

//CREATE BUS
export const createBus = async (req, res) => {
    if (req.body.image == "") {
        req.body.image = "https://freepngdownload.com/image/thumb/bus-icon-png.png"
    }
    const newBus = req.body

    try {
        const { regNo } = newBus;
        const isExist = await BusModel.findOne({ regNo: regNo })
        if (isExist) {
            res.status(409).json({ error: 'Bus Already Exist' })
        } else {
            const result = BusModel.create(newBus)
            res.status(200).json(result);
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

//Update BUS
export const updateBus = async (req, res) => {
    const newBus = req.body
    const { id } = req.params;

    try {
        const isExist = await BusModel.findById(id)
        if (!isExist) {
            res.status(500).json({ error: 'Bus Not Exist' })
        } else {
            const result = BusModel.findByIdAndUpdate(id, newBus)
            res.status(200).json(result);
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}


//DELETE Bus
export const deleteBus = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await BusModel.findByIdAndDelete(id)
        if (result) {
            res.status(200).json({ message: 'Deleted Successfully', result });
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

//CREATE BUS WITH OWNER
export const createBusWithOwner = async (req, res) => {

    verifyToken(req).then((ownerId) => {
        req.body.owner = ownerId
    }).catch((error) => {
        console.error(error);
    });

    try {
        if(req.body.busName == '' || req.body.regNo == '' || req.body.routeNo == ''){
            throw Error('Required Fields are missing')
        }
        if (req.body.image == "") {
            req.body.image = "https://freepngdownload.com/image/thumb/bus-icon-png.png"
        }
        const newBus = req.body

        const { regNo } = newBus;
        const isExist = await BusModel.findOne({ regNo: regNo })
        if (isExist) {
            res.status(409).json({ error: 'Bus Already Exist' })
        } else {
            const result = BusModel.create(newBus)
            res.status(200).json(result);
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

// GET ALL BUSSES BELONG TO OWNER
export const getAllBussesOwn = async (req, res) => {
    try {
        const ownerId = await verifyToken(req);
        const result = await BusModel.find({ 'owner': ownerId });
        if (result) {
            res.status(200).json(result);
        }
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};


// Find a Bus and populate the owner field with the Bus owner document
// Bus.findById(busId)
//   .populate('owner')
//   .exec((err, bus) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log('Bus with owner:', bus);
//     }
//   });
