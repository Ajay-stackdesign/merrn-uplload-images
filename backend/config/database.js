const mongoose = require("mongoose")

const database = () => {
    mongoose.connect(`mongodb+srv://ajaysahani:mBEdDF6BylvPKQvn@cluster0.4kmgc.mongodb.net/upload?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("connected to the databse")
        }).catch((err) => {
            console.log(err)
        })
}


module.exports = database