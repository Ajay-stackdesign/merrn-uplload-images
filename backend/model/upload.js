const mongoose = require("mongoose")


const uploadScehma = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    images: [
        {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true
            }
        }
    ]
})


module.exports = new mongoose.model("Upload", uploadScehma)