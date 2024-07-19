import mongoose from "mongoose";
import cratesModel from "./crates.model.js";

const userSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        default: 100
    },
    crates: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Crate' // Replace with the actual model name ('Crate' in this example)
    }]
});

const User = mongoose.model("User", userSchema);

export default User;
