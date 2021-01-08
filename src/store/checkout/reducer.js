import checkoutActionTypes from "./types"

const initialState = {
    checkoutList: [],
    total: 0
}

const checkoutReducer = function (state = initialState, actions) {
    switch (actions.type) {
        case checkoutActionTypes.SET_CHECKOUT_LIST:
            return { ...state, checkoutList: actions.payload }
        case checkoutActionTypes.SET_TOTAL:
            return { ...state, total: actions.payload }
        case checkoutActionTypes.INCREASE_QUANTITY:
            return { ...state, checkoutList: actions.payload }
        case checkoutActionTypes.DECREASE_QUANTITY:
            return { ...state, checkoutList: actions.payload }
        default:
            return state;
    }
}

export { checkoutReducer }