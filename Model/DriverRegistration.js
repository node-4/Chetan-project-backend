const mongoose = require("mongoose");
const Driver = mongoose.Schema({
    driverId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "driver",
    }],
    addressId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
    },
    cutOffTimeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cutOffTime",
    },
    name: {
        type: String,
        require: false
    },
    password: {
        type: String,
        require: false
    },
    phone: {
        type: String,
        require: false
    },
    email: {
        type: String,
        require: false
    },
    gender: {
        type: String,
        require: false
    },
    image: {
        type: String,
        require: false
    },
    otp: {
        type: String,
        require: true
    },
    completeProfile: {
        type: Boolean,
        require: false
    },
    status: {
        type: String,
        default: "pending"
    },
    role: {
        type: String,
        enum: ["driver", "collectionBoy"],
        default: "driver",
    }
})

const driver = mongoose.model('driver', Driver);

module.exports = driver;