import mongoose from "mongoose";

const PurcchaseOrdeShema = mongoose.Schema({
    products: {
        type : Object,
        required: true
    },
    vendor: {
        type: String,
        required: true
    },
    
    purchaseDate: {
        type: String
        
    },
    Ponumber : {
        type : String
    }
    
})


const PurchaseOrderModel = mongoose.model("PurchaseOrder", PurcchaseOrdeShema)

export default PurchaseOrderModel