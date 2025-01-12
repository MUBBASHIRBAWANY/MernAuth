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


    export const deletePurchaseOrdr = async (req,res) =>{
        // Implement delete logic here
    try{
        const purchaseOrder = await PurchaseOrderModel.findByIdAndDelete(req.params.id)
        res.send(purchaseOrder)
    }catch(err){
        console.log(err)
    }
    }


    export const updatePurchaseOrder = async (req,res) =>{
        try{
            const purchaseOrder = await PurchaseOrderModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
            res.send(purchaseOrder)
        }catch(err){
            res.send(err)
        }
    }


    export const getPurchaseOrderByid = async (req,res) => {
                try{
                const product = await PurchaseOrderModel.findById(req.params.id)
                res.send(product)
            }catch(err){
                res.send(err)
            }
        }
        export const lastPo = async (req, res) =>{
            try{
                const lastPo = await PurchaseOrderModel.findOne().sort({_id:-1}).limit(1)
                res.send(lastPo)
            }catch(err){
                res.send(err)
            }
        }
    
    export const getPurchaseOrdersByVendor = async (req,res) => {
        try{
            const purchaseOrders = await PurchaseOrderModel.find({vendor: req.body.vendor})
            res.send(purchaseOrders)
        }catch(err){
            res.send(err)
        }
    }