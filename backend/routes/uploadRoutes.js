const express = require("express")
const { createUpload, getUpload } = require("../controller/uploadController")

const router = express.Router()


router.route("/upload").post(createUpload)
router.route('/get').get(getUpload)

module.exports = router