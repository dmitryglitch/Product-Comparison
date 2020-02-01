const initialState = {
    userName: '',
    isLogin: false,
    isFetching: true,
    isError: null
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'SEND_LOGIN_USER_STARTED':
            return {
                ...state,
                isFetching: true,
                isError: null
            };

        case 'SEND_LOGIN_USER_SUCCESS':
            return {
                ...state,
                userName: action.payload,
                isFetching: false,
                isError: null,
                isLogin: true,
            };

        case 'SEND_LOGIN_USER_ERROR':
            return {
                ...state,
                isFetching: false,
                isError: action.payload
            };

        default:
            return state;
    }

};

export default user