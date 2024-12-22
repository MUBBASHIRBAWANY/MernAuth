import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
    },
    usedFor: {
        type: String,
    },
    FOC : {
        type: String,
    }

})

const productModal = mongoose.model('products', productSchema )
export default productModal