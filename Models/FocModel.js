import mongoose from "mongoose";

const FOCShema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    conert_From : {
        type : String,
        required : true
    },
    conert_To : {
        type : String,
        required : true
    }
})

const FocModel = mongoose.model("FOC", FOCShema)

export default FocModel