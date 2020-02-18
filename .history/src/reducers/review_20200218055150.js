const initialState = {
  isFetching: false,
  isError: null,
  users: null
};

const review = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LIST_USER_SUCCESS":
      return {
        ...state,
        isFetching: false,
        isError: null,
        users: action.payload.user
      };

    default:
      return state;
  }
};

export default review;
