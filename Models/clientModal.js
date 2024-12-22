import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    client_Address: {
        type: String,
    },
    CareOf: {
        type: String,
    },
    client_Name: {
        type: String,
        required: true
    },
    client_City: {
        type: String,
    },
    client_Email : {
        type: String,
    },
    client_Contact_No : {
        type: String,
    }

})

const clientModal = mongoose.model('client', clientSchema )
export default clientModal