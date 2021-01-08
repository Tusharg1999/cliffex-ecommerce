import { combineReducers } from 'redux';
import { checkoutReducer } from '../../store/checkout/reducer';
import { productReducer } from '../../store/products/reducer';

const rootReducer = combineReducers({
    product:productReducer,
    checkout:checkoutReducer
})

export default rootReducer 