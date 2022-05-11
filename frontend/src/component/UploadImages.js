import React, { Fragment, useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, upload } from '../action/uploadAction';
import { useNavigate } from "react-router-dom"
import { CREATE_POST_RESET } from '../contants.js/uploadContants';
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'


const UploadImages = () => {
    const navigate = useNavigate()
    const alert = useAlert()
    const dispatch = useDispatch()
    const { loading, error, success } = useSelector((state) => state.uploadImages)
    console.log(success)
    const [name, setName] = useState("")
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault()
        const myForm = new FormData()
        myForm.set("name", name)
        images.forEach((image) => {
            myForm.append("images", image);
        });
        dispatch(upload(myForm));
    }

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }

        if (success) {
            alert.success("images Created SuccessFully")
            navigate("/get")
            dispatch({ type: CREATE_POST_RESET })
        }
    }, [alert, dispatch, error, navigate, success])

    const [crop, setCrop] = useState({ aspect: 16 / 9 })

    const createUploadImagesChange = (e) => {
        const files = Array.from(e.target.files);//Array from creates a copy of an array

        setImages([]);
        setImagesPreview([]);

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview((old) => [...old, reader.result]);
                    setImages((old) => [...old, reader.result]);
                }
            };

            reader.readAsDataURL(file);
        });
    }
    return (
        <Fragment>
            <form encType="multipart/form-data"
                onSubmit={handleSubmit}>
                <input type="text" name="text" placeholder='enter name' value={name} onChange={(e) => setName(e.target.value)} />

                <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={createUploadImagesChange}
                    multiple
                />

                <ReactCrop crop={crop} onChange={c => setCrop(c)}>
                    <img src={imagesPreview} alt="name" />
                </ReactCrop>

                <button
                    id="createProductBtn"
                    type="submit"
                    disabled={loading ? true : false}
                >
                    Create
                </button>
            </form>
        </Fragment>
    )
}

export default UploadImages