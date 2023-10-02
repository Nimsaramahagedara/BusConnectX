import BusModel from "../Models/BusModel.js"
import { verifyToken } from "../Utils/VerifyToken.js";
import cloudinary from '../Utils/Cloudinary.js';

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

export const createBusWithOwner = async (req, res) => {
    try {
        const secureUrl = await uploadImageToCloudinary(req.file.path);
        const ownerId = await verifyToken(req);

        if (!req.body.busName || !req.body.regNo || !req.body.routeNo) {
            throw new Error('Required Fields are missing');
        }

        const { regNo } = req.body;
        const isExist = await BusModel.findOne({ regNo: regNo });

        if (isExist) {
            return res.status(409).json({ error: 'Bus Already Exists' });
        }

        req.body.image = secureUrl;
        req.body.owner = ownerId;

        const result = await BusModel.create(req.body);
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
};

export const uploadImageToCloudinary =  async(filePath)=> {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(filePath, { folder: 'ConnectX' }, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result.secure_url);
            }
        });
    });
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

export const success = (req, res) => {
    console.log(req.body);
    res.status(200).json('File Uploaded')
}