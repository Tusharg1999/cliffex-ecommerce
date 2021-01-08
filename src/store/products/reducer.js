import productActionTypes from "./types"

const initialState = {
    products:[] 
}

const productReducer = function (state = initialState, actions) {
    switch (actions.type) {
        case productActionTypes.GET_PRODUCT_LIST:
            return { ...state, products: actions.payload }
        default:
            return state
    }
}

export { productReducer }