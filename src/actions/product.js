export const getCoupleProducts = () => dispatch => {
    dispatch({type: 'GET_COUPLE_PRODUCTS_STATED'});

    fetch(
        'http://match.protarget.pro/backend/getNewTask2.php', {
            method: "POST",
            headers: {Accept: "application/json"}
        })
        .then(res => res.json())
        .then(json => {
            let data = {
                id: json.id,
                result: json.result,
                massProducts: {
                    oneProduct: json.oneProduct,
                    twoProduct: json.newTwoProduct,
                }
            };
            dispatch({type: 'GET_COUPLE_PRODUCTS_SUCCESS', payload: data})
        })
        .catch(error => dispatch({type: 'GET_COUPLE_PRODUCTS_ERROR', payload: error}));
};