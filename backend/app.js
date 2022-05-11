const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const fileUpload = require("express-fileupload")
const path = require("path")


if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: "backend/config/.env" });
}
// dotenv.config({ path: "backend/config/.env" });


app.use(express.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }))
app.use(fileUpload())

const uploadRoute = require("./routes/uploadRoutes")

app.use("/api/v1", uploadRoute)

app.use(express.static(path.join(__dirname, "../frontend/build")));


app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

module.exports = app