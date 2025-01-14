import mongoose, { Types } from "mongoose";

const totalProductModalSchema = mongoose.Schema({
    ProductName : {
        type : String,
        required : true
    },
    TotalQuantity : {
        type : Number,
        required : true
    }
})

const TotalProductModal = mongoose.model("TotalProduct", totalProductModalSchema)
export default TotalProductModal