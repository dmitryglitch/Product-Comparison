export const getCoupleProducts = privilege => dispatch => {
  dispatch({ type: "GET_COUPLE_PRODUCTS_STATED" });

  let url = "";
  if (privilege === 1) {
    url = "http://match.protarget.pro/backend/admin/getNewTask.php";
  } else {
    url = "http://match.protarget.pro/backend/getNewTask.php";
  }

  fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: { Accept: "application/json" }
  })
    .then(res => res.json())
    .then(json => {
      console.log("getCoupleProducts", json);
      let data = {
        id: json.id,
        date: json.date,
        id_answer: json.id_answer,
        answerUser: json.answerUser,
        answerAdmin: json.answerAdmin,
        endSample: json.endSample,
        statisticsAdmin: json.statistics_admin,
        result: json.result,
        statistics: json.statistics,
        massProducts: {
          oneProduct: json.oneProduct,
          twoProduct: json.newTwoProduct
        }
      };
      dispatch({ type: "GET_COUPLE_PRODUCTS_SUCCESS", payload: data });
    })
    .catch(error => {
      console.error(error);
      dispatch({ type: "GET_COUPLE_PRODUCTS_ERROR", payload: error });
    });
};

export const getBackCoupleProducts = (
  dateCoupleProducts,
  privilege
) => dispatch => {
  console.log(privilege);

  let url = "";
  if (privilege === 1) {
    url = "http://match.protarget.pro/backend/admin/getBackTask.php";
  } else {
    url = "http://match.protarget.pro/backend/getBackTask.php";
  }

  let data = new FormData();
  data.append("date", dateCoupleProducts);

  dispatch({ type: "GET_BACK_COUPLE_PRODUCTS_STATED" });
  fetch(url, {
    method: "POST",
    body: data,
    credentials: "same-origin",
    headers: { Accept: "application/json" }
  })
    .then(res => res.json())
    .then(json => {
      console.log("getBackCoupleProducts RESPONSE", json);

      if (json.result === "Ok") {
        let data = {
          id: json.id,
          id_answer: json.id_answer,
          date: json.date,
          answerUser: json.answerUser,
          statisticsAdmin: json.statistics_admin,
          result: json.result,
          statistics: json.statistics,
          massProducts: {
            oneProduct: json.oneProduct,
            twoProduct: json.newTwoProduct
          }
        };
        dispatch({ type: "GET_BACK_COUPLE_PRODUCTS_SUCCESS", payload: data });
      } else {
        dispatch({ type: "GET_BACK_COUPLE_PRODUCTS_LOGIN_ERROR" });
      }
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: "GET_BACK_COUPLE_PRODUCTS_ERROR", payload: error });
    });
};

export const getForwardCoupleProducts = (
  dateCoupleProducts,
  privilege
) => dispatch => {
  let url = "";
  if (privilege === 1) {
    url = "http://match.protarget.pro/backend/admin/getForwardTask.php";
  } else {
    url = "http://match.protarget.pro/backend/getForwardTask.php";
  }

  let data = new FormData();
  data.append("date", dateCoupleProducts);

  dispatch({ type: "GET_FORWARD_COUPLE_PRODUCTS_STATED" });
  fetch(url, {
    method: "POST",
    body: data,
    credentials: "same-origin",
    headers: { Accept: "application/json" }
  })
    .then(res => res.json())
    .then(json => {
      console.log("getBackCoupleProducts RESPONSE", json);
      if (json.result === "Ok") {
        let data = {
          id: json.id,
          id_answer: json.id_answer,
          date: json.date,
          answerUser: json.answerUser,
          statisticsAdmin: json.statistics_admin,
          result: json.result,
          statistics: json.statistics,
          massProducts: {
            oneProduct: json.oneProduct,
            twoProduct: json.newTwoProduct
          }
        };
        dispatch({
          type: "GET_FORWARD_COUPLE_PRODUCTS_SUCCESS",
          payload: data
        });
      } else {
        dispatch({ type: "GET_FORWARD_COUPLE_PRODUCTS_LOGIN_ERROR" });
      }
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: "GET_FORWARD_COUPLE_PRODUCTS_ERROR", payload: error });
    });
};

export const searchCoupleProducts = id => dispatch => {
  let data = new FormData();
  data.append("id", id);

  dispatch({ type: "SEARCH_COUPLE_PRODUCTS_STATED" });
  fetch("http://match.protarget.pro/backend/getSearchProduct.php", {
    method: "POST",
    body: data,
    credentials: "same-origin",
    headers: { Accept: "application/json" }
  })
    .then(res => res.json())
    .then(json => {
      console.log("searchCoupleProducts RESPONSE", json);
      if (json.result === "Ok") {
        let data = {
          id: json.id,
          id_answer: json.id_answer,
          date: json.date,
          answerUser: json.answerUser,
          statisticsAdmin: json.statistics_admin,
          result: json.result,
          statistics: json.statistics,
          massProducts: {
            oneProduct: json.oneProduct,
            twoProduct: json.newTwoProduct
          }
        };
        dispatch({ type: "SEARCH_COUPLE_PRODUCTS_SUCCESS", payload: data });
      } else {
        dispatch({ type: "SEARCH_COUPLE_PRODUCTS_LOGIN_ERROR" });
      }
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: "SEARCH_COUPLE_PRODUCTS_ERROR", payload: error });
    });
};

export const setUserAnswerEnd = answer => dispatch => {
  let data = new FormData();
  data.append("answer", answer);

  dispatch({ type: "SET_USER_ANSWER_END_STATED" });
  fetch("http://match.protarget.pro/backend/admin/setUserAnswerEnd.php", {
    method: "POST",
    body: data,
    credentials: "same-origin",
    headers: { Accept: "application/json" }
  })
    .then(res => res.json())
    .then(json => {
      console.log("setUserAnswerEnd", json);
      if (json.result === "ok") {
        dispatch({ type: "SET_USER_ANSWER_END_SUCCESS", payload: data });
      } else {
        alert(json);
      }
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: "SET_USER_ANSWER_END_ERROR", payload: error });
    });
};
