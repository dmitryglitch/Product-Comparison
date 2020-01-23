const initialState = {
    isFetching: false,
    isError: null,
    id: 0,
    result: null,
    massProducts: null
};

const product = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_COUPLE_PRODUCTS_STATED':
            return {
                ...state,
                isFetching: true,
                isError: null
            };

        case 'GET_COUPLE_PRODUCTS_SUCCESS':
            return {
                ...state,
                isFetching: false,
                isError: null,
                id: action.payload.id,
                result: action.payload.result,
                massProducts: action.payload.massProducts
            };

        case 'GET_COUPLE_PRODUCTS_ERROR':
            return {
                ...state,
                isFetching: false,
                isError: action.payload
            };

        default:
            return state;
    }

};

export default product