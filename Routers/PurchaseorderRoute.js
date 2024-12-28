import exprees from 'express'
import { getAllPurchaseOrders, postPurchaseOrder } from '../Controllar/PurchaseOrderControllar.js';


const purchaseOrderRoute = exprees.Router()

// Get all purchase orders

purchaseOrderRoute.get('/', getAllPurchaseOrders)
purchaseOrderRoute.post('/', postPurchaseOrder)

// Get purchase order by ID

export default purchaseOrderRoute;