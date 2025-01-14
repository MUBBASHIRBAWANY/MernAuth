import express from 'express'
import userRoute from './Routers/userRoute.js'
import   db   from './db/db.js'
import dotenv from 'dotenv'
import vendorRoutes from './Routers/vendorRoute.js'
import ClientRoutes from './Routers/ClientRoutes.js'
import productRoutes from './Routers/ProductRoutes.js'
import focRoute from './Routers/focRoute.js'
import purchaseOrderRoute from './Routers/PurchaseorderRoute.js'

dotenv.config()

const router = express.Router()

let dataBase = db
dataBase()


const app = express()

export const defUlt = app.use('/user', userRoute )
export const vendor = app.use('/vendor', vendorRoutes )
export  const client = app.use('/client', ClientRoutes)
export const product = app.use('/product', productRoutes)
export const foc = app.use('/foc', focRoute)
export const purchaseOrder = app.use('/purchaseorder', purchaseOrderRoute )
