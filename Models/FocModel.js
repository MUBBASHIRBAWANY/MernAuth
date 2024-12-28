import mongoose from "mongoose";

const FOCShema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    convert_From : {
        type : String,
        
    },
    convert_To : {
        type : String,
        
    }
})

const FocModel = mongoose.model("FOC", FOCShema)

export default FocModel