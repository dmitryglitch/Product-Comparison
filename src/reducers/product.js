const initialState = {
  isFetching: false,
  isError: null,
  id: 0,
  date: null,
  endSample: null,
  answerUser: null,
  statisticsAdmin: null,
  statistics: {},
  id_answer: 0,
  result: null,
  massProducts: null
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COUPLE_PRODUCTS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        isError: null,
        isLogin: true,
        id: action.payload.id,
        date: action.payload.date,
        endSample: action.payload.endSample,
        answerUser: action.payload.answerUser,
        answerAdmin: action.payload.answerAdmin,
        statisticsAdmin: action.payload.statisticsAdmin,
        statistics: action.payload.statistics,
        id_answer: action.payload.id_answer,
        result: action.payload.result,
        massProducts: action.payload.massProducts
      };

    case "GET_BACK_COUPLE_PRODUCTS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        isError: null,
        isLogin: true,
        id: action.payload.id,
        date: action.payload.date,
        answerUser: action.payload.answerUser,
        statisticsAdmin: action.payload.statisticsAdmin,
        statistics: action.payload.statistics,
        id_answer: action.payload.id_answer,
        result: action.payload.result,
        massProducts: action.payload.massProducts
      };

    case "GET_FORWARD_COUPLE_PRODUCTS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        isError: null,
        isLogin: true,
        id: action.payload.id,
        date: action.payload.date,
        answerUser: action.payload.answerUser,
        statisticsAdmin: action.payload.statisticsAdmin,
        statistics: action.payload.statistics,
        id_answer: action.payload.id_answer,
        result: action.payload.result,
        massProducts: action.payload.massProducts
      };

    case "SEARCH_COUPLE_PRODUCTS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        isError: null,
        isLogin: true,
        id: action.payload.id,
        date: action.payload.date,
        answerUser: action.payload.answerUser,
        statisticsAdmin: action.payload.statisticsAdmin,
        statistics: action.payload.statistics,
        id_answer: action.payload.id_answer,
        result: action.payload.result,
        massProducts: action.payload.massProducts
      };

    case "SET_USER_ANSWER_END_SUCCESS":
      return {
        ...state,
        isFetching: false,
        isError: null,
        isLogin: true,
        endSample: false,
      };

    case "GET_COUPLE_PRODUCTS_STATED":
    case "GET_BACK_COUPLE_PRODUCTS_STATED":
    case "GET_FORWARD_COUPLE_PRODUCTS_STATED":
    case "SEARCH_COUPLE_PRODUCTS_STATED":
    case "SET_USER_ANSWER_END_STATED":
      return {
        ...state,
        isFetching: true,
        isError: null
      };

    case "GET_COUPLE_PRODUCTS_LOGIN_ERROR":
    case "GET_BACK_COUPLE_PRODUCTS_LOGIN_ERROR":
    case "GET_FORWARD_COUPLE_PRODUCTS_LOGIN_ERROR":
    case "SEARCH_PRODUCTS_LOGIN_ERROR":
    case "SET_USER_ANSWER_END_ERROR":
      return {
        ...state,
        isFetching: true,
        isError: null,
        isLogin: false
      };

    case "GET_COUPLE_PRODUCTS_ERROR":
    case "GET_BACK_COUPLE_PRODUCTS_ERROR":
    case "GET_FORWARD_COUPLE_PRODUCTS_ERROR":
    case "SEARCH_COUPLE_PRODUCTS_ERROR":
      return {
        ...state,
        isFetching: false,
        isError: action.payload
      };

    default:
      return state;
  }
};

export default product;
