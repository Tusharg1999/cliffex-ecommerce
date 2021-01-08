import checkoutActionTypes from "./types"

const initialState = {
    checkoutList: []
}

const checkoutReducer = function (state = initialState, actions) {
    switch (actions.type) {
        case checkoutActionTypes.SET_CHECKOUT_LIST:
            return { ...state, checkoutList: actions.payload }
        default:
            return state;
    }
}

export { checkoutReducer }