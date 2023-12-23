const mongoose = require("mongoose")

const CarSchema = new mongoose.Schema({

    brand: {type: String, required: true},

    model: {type: String, required: true },

    modelYear: {type: String, required: true},

    fuel: {type: String, required: true},

    gear: {type: String, required: true},

    km: {type: String , required: true},

    price: {type: String , required: true},

    // date: {type: Date, default: Date.now},

    // car_image: {type: String, required: true}

})


module.exports = mongoose.model('Car', CarSchema)