import express from 'express'
import { getAllClient, postClient, UpdateClient, getClientByid,deleteClient} from '../Controllar/ClientControllar.js'
const ClientRoutes = express.Router()

// Importing controllers

ClientRoutes.get('/', getAllClient)
ClientRoutes.post('/', postClient)
ClientRoutes.put('/updateClient/:id', UpdateClient)
ClientRoutes.delete('/deleteVendor/:id', deleteClient)







export default ClientRoutes