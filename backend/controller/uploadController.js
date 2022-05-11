const Upload = require("../model/upload")
const cloudinary = require("cloudinary")


exports.createUpload = async (req, res, next) => {
    try {

        let images = [];

        if (typeof req.body.images === "string") {
            images.push(req.body.images);
        } else {
            images = req.body.images;
        }

        const imagesLinks = [];

        for (let i = 0; i < images.length; i++) {
            const result = await cloudinary.v2.uploader.upload(images[i], {
                folder: "upload",
                width: 150,
                crop: "scale",
            });

            imagesLinks.push({
                public_id: result.public_id,
                url: result.secure_url,
            });
        }


        req.body.images = imagesLinks;
        console.log(imagesLinks)

        const upload = await Upload.create(req.body)

        res.status(201).json({
            success: true,
            upload,
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.getUpload = async (req, res, next) => {
    try {
        const uploads = await Upload.find()

        res.status(200).json({
            success: true,
            uploads,
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

