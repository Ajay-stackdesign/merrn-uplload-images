const mongoose = require("mongoose")

const database = () => {
    mongoose.connect(`${process.env.MONGO_URI}`, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("connected to the databse")
        }).catch((err) => {
            console.log(err)
        })
}
// mongodb+srv://ajaysahani:mBEdDF6BylvPKQvn@cluster0.4kmgc.mongodb.net/upload?retryWrites=true&w=majority
// mongodb+srv://ajaysahani:dYyacLekAhxivsmg@cluster0.xvp45.mongodb.net/upload?retryWrites=true&w=majority


module.exports = database