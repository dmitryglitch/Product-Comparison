import { getCoupleProductsApi } from "../api/product"

export const getCoupleProducts = () => async dispatch => {
    let response = await getCoupleProductsApi();
    let data = await response.json();

    dispatch({ type: 'GET_COUPLE_PRODUCTS', payload: data });
};