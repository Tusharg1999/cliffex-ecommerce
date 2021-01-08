import checkoutActionTypes from './types';

function setCheckoutList(payload) {
    return {
        type: checkoutActionTypes.SET_CHECKOUT_LIST,
        payload: payload
    }
}
function setTotal(payload) {
    return {
        type: checkoutActionTypes.SET_TOTAL,
        payload: payload
    }
}

function updateTotal() {
    return function (dispatch, getState) {
        const checkoutList = getState().checkout.checkoutList;
        let total = 0;
        checkoutList.forEach(el => {
            total = total + el.price*el.quantity ;
        })
        dispatch(setTotal(total))
    }
}

function updateCheckoutList(data) {
    return function (dispatch, getState) {
        const checkoutList = getState().checkout.checkoutList;
        const found = checkoutList.some(el => el.name === data.name);
        if (found) {
            checkoutList.forEach((el, index) => {
                if (el.name === data.name) {
                    const newAdd = {
                        ...el,
                        quantity: el.quantity + 1
                    }
                    checkoutList[index] = newAdd;
                    dispatch(setCheckoutList(checkoutList));
                    dispatch(updateTotal());
                }
            })

        } else {
            const newAdd = {
                name: data.name,
                price: data.price,
                desc: data.desc,
                image: data.image,
                quantity: 1
            }
            const newList = [...checkoutList, newAdd]
            dispatch(setCheckoutList(newList));
            dispatch(updateTotal());
        }
        console.log(found);
    }
}

export { updateCheckoutList };