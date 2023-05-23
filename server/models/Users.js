const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    nameOfProduct: {
        type: String,
        required: true,
    },
    dateOfHarvest: {
        type: String,//date format (dd-mm-yyyy)
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    productImage: {
        type: String, //URL
        required: true,
    },
    tags:{
        type: String,
        required: true,
    },
});

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;