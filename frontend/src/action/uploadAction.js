import axios from "axios"

import { ALL_POST_FAIL, ALL_POST_REQUEST, ALL_POST_SUCCESS, CLEAR_ERRORS, CREATE_POST_FAIL, CREATE_POST_REQUEST, CREATE_POST_SUCCESS } from "../contants.js/uploadContants"

export const getAllUpload = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_POST_REQUEST })

        const { data } = await axios.get(`/api/v1/get`)

        dispatch({
            type: ALL_POST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ALL_POST_FAIL,
            payload: error.response.data.message
        })
    }
}

export const upload = (uplaodData) => async (dispatch) => {
    try {
        dispatch({
            type: CREATE_POST_REQUEST
        })
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const { data } = await axios.post(`/api/v1/upload`, uplaodData, config)
        dispatch({
            type: CREATE_POST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: CREATE_POST_FAIL,
            payload: error.response.data.message,
        })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}