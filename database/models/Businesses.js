const mongoose = require("mongoose");

const BusinessesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: String,
    instagram: String,
    facebook: String,
    number: String,
    accessories: Boolean,
    brake: Boolean,
    bodykit: Boolean,
    carbonFibre: Boolean,
    coater: Boolean,
    coilover: Boolean,
    detailer: Boolean,
    diy: Boolean,
    engineSwap: Boolean,
    exhaust: Boolean,
    forcedInduction: Boolean,
    generalPerformance: Boolean,
    lightRestoration: Boolean,
    others: Boolean,
    painter: Boolean,
    racingSeats: Boolean,
    tuning: Boolean,
    wheels: Boolean,
    wrapper: Boolean
})

const Businesses = mongoose.model("Businesses", BusinessesSchema);

module.exports = Businesses;