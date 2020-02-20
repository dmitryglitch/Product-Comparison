const initialState = {
  isFetching: false,
  isError: null,
  users: null,
  selectedUser: "По всем",
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

    case "UPDATE_CURRENT_SELECTED_USER":
      return {
        ...state,
        selectedUser: action.payload
      };

    case "UPDATE_DATE_STARTED":
      return {
        ...state,
        dateStarted: action.payload
      };

    case "UPDATE_DATE_ENDING":
      return {
        ...state,
        dateEnding: action.payload
      };

    case "UPDATE_SERVING_SIZE":
      return {
        ...state,
        servingSize: action.payload
      };

    case "UPDATE_PERCENT_VERIFIED":
      return {
        ...state,
        percentVerified: action.payload
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
