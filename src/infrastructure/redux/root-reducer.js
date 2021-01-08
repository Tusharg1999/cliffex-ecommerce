import { combineReducers } from 'redux';
import { productReducer } from '../../store/products/reducer';

const rootReducer = combineReducers({
    product:productReducer
})

export default rootReducer 