import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from './root-reducer';

let enhancers = applyMiddleware(thunk);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

enhancers = composeEnhancers(enhancers);

const store = createStore(rootReducer, enhancers);

export { store }