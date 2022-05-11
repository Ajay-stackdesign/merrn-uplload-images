import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearErrors, getAllUpload } from '../action/uploadAction'
import Upload from "./component/Upload.js"

const GetAll = () => {
    const dispatch = useDispatch()
    const alert = useAlert()
    const { uploads, loading, error } = useSelector(state => state.upload)
    console.log(uploads)

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        dispatch(getAllUpload())
    }, [alert, dispatch, error])
    return (
        <Fragment>
            <button><Link to="/upload">Create image </Link></button>
            {loading ? "something went wrong" : (
                <Fragment>
                    {uploads &&
                        uploads.map((upload) => (
                            <Upload key={upload._id} upload={upload} />
                        ))}
                </Fragment>
            )}
        </Fragment>
    )
}

export default GetAll