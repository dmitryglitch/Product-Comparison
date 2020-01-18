const product = (state = [], action) => {
    if (action.type === 'GET_COUPLE_PRODUCTS') {
        console.log(action.payload);
        return [
            ...state,
            action.payload
        ]
    }
    return state;
};

export default product