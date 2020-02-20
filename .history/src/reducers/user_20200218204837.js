const initialState = {
  userName: "",
  privilege: null,
  isLogin: false,
  isFetching: true,
  isError: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SEND_LOGIN_USER_SUCCESS":
      return {
        ...state,
        userName: action.payload,
        privilege: action.payload.privilege,
        isFetching: false,
        isError: null,
        isLogin: true
      };

    case "LOGOUT_USER_SUCCESS":
      return {
        ...state,
        userName: "",
        isFetching: false,
        isError: null,
        isLogin: false
      };

    case "SEND_LOGIN_USER_STARTED":
    case "LOGOUT_USER_STARTED":
      return {
        ...state,
        isFetching: true,
        isError: null
      };

    case "SEND_LOGIN_USER_ERROR":
    case "LOGOUT_USER_ERROR":
      return {
        ...state,
        isFetching: false,
        isError: action.payload
      };

    default:
      return state;
  }
};

export default user;
