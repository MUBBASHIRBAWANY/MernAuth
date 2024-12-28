import PurchaseOrderModel from '../Models/PurchaseOrderModal.js'


export const getAllPurchaseOrders = async (req,res) =>{
    try {
        const purchaseOrders = await PurchaseOrderModel.find({})
        res.send(purchaseOrders)
    } catch (error) {
        console.log(error)
    }
}

export const postPurchaseOrder = async (req,res) =>{
    console.log(req.body)
    try {
        const purchaseOrder =  await PurchaseOrderModel.create({
            products : req.body.products,
            vendor : req.body.vendor,
            date : req.body.date,
            purchaseDate: req.body.purchaseDate,
            Ponumber : req.body.Ponumber

        })
        
        res.send(purchaseOrder)
    } catch (error) {
        res.send(error)
    }
}