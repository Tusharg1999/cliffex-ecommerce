import axios from 'axios'
import productActionTypes from './types';

function setProductData(payload) {
    return {
        type: productActionTypes.GET_PRODUCT_LIST,
        payload: payload
    }
}

function getProductData() {
    return async function (dispatch) {
        try {
            const response = await axios.get("https://next.json-generator.com/api/json/get/4kBVim32Y");
            dispatch(setProductData(response.data.data))
        } catch (e) {
            console.log(e);
        }
    }
}

export  {getProductData};