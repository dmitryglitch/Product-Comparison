const initialState = {
  userName: null,
  privilege: null,
  isLogin: false,
  isFetching: true,
  isError: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK_USER_STATUS_SUCCESS":
      return {
        ...state,
        userName: action.payload.userName,
        privilege: action.payload.privilege,
        isFetching: false,
        isError: null,
        isLogin: true
      };

    case "SEND_LOGIN_USER_SUCCESS":
      return {
        ...state,
        userName: action.payload.userName,
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

    case "CHECK_USER_STATUS_STARTED":
    case "SEND_LOGIN_USER_STARTED":
    case "LOGOUT_USER_STARTED":
      return {
        ...state,
        isLogin: false,
        isFetching: true,
        isError: null
      };

    case "CHECK_USER_STATUS_ERROR":
    case "SEND_LOGIN_USER_ERROR":
    case "LOGOUT_USER_ERROR":
      return {
        ...state,
        isLogin: false,
        isFetching: false,
        isError: action.payload
      };

    default:
      return state;
  }
};

export default user;
