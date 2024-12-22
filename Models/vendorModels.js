import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
    Vendor_Address: {
        type: String,
    },
    CareOf: {
        type: String,
    },
    Vendor_Name: {
        type: String,
        required: true
    },
    Vendor_City: {
        type: String,
    },
    Vendor_Email : {
        type: String,
    },
    Vendor_Contact_No : {
        type: String,
    }

})

const vendorModal = mongoose.model('vendors', vendorSchema )
export default vendorModal