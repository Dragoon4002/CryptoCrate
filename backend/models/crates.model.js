import mongoose from "mongoose";

const crateSchema = new mongoose.Schema({
    id : {
        type : String,
        required: true
    },
    content : {
        type : Number,
        required: true
    },
    price : {
        type : String,
        required: true
    }
})

export default mongoose.model("Crate", crateSchema)