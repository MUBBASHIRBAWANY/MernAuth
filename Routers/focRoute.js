import express from "express"

import { deleteFoc, getAllFoc ,postFoc, updateFoc } from "../Controllar/FocControllar.js"

const focRoute = express.Router()

// Get all FOC

focRoute.get('/', getAllFoc)
focRoute.post('/', postFoc)
focRoute.put('/updateFoc/:id', updateFoc)
focRoute.delete('/deleteFoc/:id', deleteFoc)



export default focRoute