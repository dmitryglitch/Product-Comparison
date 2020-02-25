export const getCoupleProducts = (privilege) => dispatch => {
  dispatch({ type: "GET_COUPLE_PRODUCTS_STATED" });

  let url = "" 
  if (privilege === 1) {
    url = 'http://match.protarget.pro/backend/admin/getNewTask.php'
  } else {
    url = 'http://match.protarget.pro/backend/getNewTask.php'
  }

  fetch(url , {
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

export const getBackCoupleProducts = dateCoupleProducts => dispatch => {
  let data = new FormData();
  data.append("date", dateCoupleProducts);

  dispatch({ type: "GET_BACK_COUPLE_PRODUCTS_STATED" });
  fetch("http://match.protarget.pro/backend/getBackTask.php", {
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

export const getForwardCoupleProducts = dateCoupleProducts => dispatch => {
  let data = new FormData();
  data.append("date", dateCoupleProducts);

  dispatch({ type: "GET_FORWARD_COUPLE_PRODUCTS_STATED" });
  fetch("http://match.protarget.pro/backend/getForwardTask.php", {
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
