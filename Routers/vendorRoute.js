import express from 'express'
import { getAllVendors, postVendor, UpdateVendor, getVendorByid,deleteVendor} from '../Controllar/VendorControllar.js'
const vendorRoutes = express.Router()

// Importing controllers

vendorRoutes.get('/', getAllVendors)
vendorRoutes.post('/', postVendor)
vendorRoutes.put('/upadateVender/:id', UpdateVendor)
vendorRoutes.delete('/deleteVendor/:id', deleteVendor)
vendorRoutes.get("/vendorByid/:id", getVendorByid)






export default vendorRoutes