const mongoose = require("mongoose")

const CarSchema = new mongoose.Schema({

    brand: {type: String, required: true},

    model: {type: String, required: true },

    modelYear: {type: String, required: true},

    // date: {type: Date, default: Date.now},

    // car_image: {type: String, required: true}

})


module.exports = mongoose.model('Car', CarSchema)