import exprees from 'express'
import { deletePurchaseOrdr, getAllPurchaseOrders, getPurchaseOrderByid, lastPo, postPurchaseOrder, updatePurchaseOrder } from '../Controllar/PurchaseOrderControllar.js';


const purchaseOrderRoute = exprees.Router()

// Get all purchase orders

purchaseOrderRoute.get('/', getAllPurchaseOrders)
purchaseOrderRoute.post('/', postPurchaseOrder)
purchaseOrderRoute.delete ('/purchaseOrder/:id', deletePurchaseOrdr )
purchaseOrderRoute.put("/updatepo/:id", updatePurchaseOrder )
purchaseOrderRoute.get("/pobyid/:id", getPurchaseOrderByid)
purchaseOrderRoute.get('/po/lastnumber', lastPo)
// Get purchase order by ID

export default purchaseOrderRoute;
