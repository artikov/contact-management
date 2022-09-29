import mongoose from "mongoose";

let scheme = new mongoose.Schema({
    // ID: String,
    number: String,
    monthly_price: Number,
    setup_price: Number,
    currency: String
})

const Phonedb = mongoose.model('phonedb', scheme)

export default Phonedb
