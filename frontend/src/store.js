import { createStore, combineReducers, applyMiddleware } from "redux"

import thunk from "redux-thunk"


import { composeWithDevTools } from "redux-devtools-extension"
import { newImagesReducer, uploadReducers } from "./reducer/uploadReducer"



const reducer = combineReducers({
    upload: uploadReducers,
    uploadImages: newImagesReducer
})

let initialStage = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialStage,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store