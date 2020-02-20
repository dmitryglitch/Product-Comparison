const initialState = {
  isFetching: false,
  isError: null,
  users: null,
  selectedUser: 'all',
  dateStarted: null,
  dateEnding: null,
  servingSize: null,
  percentVerified: null
};

const review = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LIST_USER_SUCCESS":
      return {
        ...state,
        isFetching: false,
        isError: null,
        users: action.payload
      };

    case "GET_LIST_USER_STARTED":
      return {
        ...state,
        isFetching: true,
        isError: null
      };

    case "GET_LIST_USER_ERROR":
      return {
        ...state,
        isFetching: false,
        isError: action.payload
      };
    default:
      return state;
  }
};

export default review;
