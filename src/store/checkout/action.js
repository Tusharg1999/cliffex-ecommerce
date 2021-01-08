import checkoutActionTypes from './types';

function setCheckoutList(payload) {
    return {
        type: checkoutActionTypes.SET_CHECKOUT_LIST,
        payload: payload
    }
}

function updateCheckoutList() {
   return function(state){
    console.log(state);
   }
}

export  {updateCheckoutList};