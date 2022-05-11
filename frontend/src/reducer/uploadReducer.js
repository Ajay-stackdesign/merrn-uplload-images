import { ALL_POST_FAIL, ALL_POST_REQUEST, ALL_POST_SUCCESS, CLEAR_ERRORS, CREATE_POST_FAIL, CREATE_POST_REQUEST, CREATE_POST_RESET, CREATE_POST_SUCCESS } from "../contants.js/uploadContants";

export const uploadReducers = (state = { uploads: [] }, action) => {
    switch (action.type) {
        case ALL_POST_REQUEST:
            return {
                loading: true,
                uploads: [],
            }
        case ALL_POST_SUCCESS:
            return {
                loading: false,
                uploads: action.payload.uploads
            }
        case ALL_POST_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }
}

export const newImagesReducer = (state = { upload: {} }, action) => {
    switch (action.type) {
        case CREATE_POST_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CREATE_POST_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                upload: action.payload.product,
            };
        case CREATE_POST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case CREATE_POST_RESET:
            return {
                ...state,
                success: false,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};