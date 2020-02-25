export const getListUser = () => dispatch => {
  dispatch({ type: "GET_LIST_USER_STARTED" });

  fetch("http://match.protarget.pro/backend/admin/getUserList.php", {
    method: "POST",
    credentials: "same-origin",
    headers: { Accept: "application/json" }
  })
    .then(res => res.json())
    .then(json => {
      dispatch({ type: "GET_LIST_USER_SUCCESS", payload: json.user });
      console.log("getListUser", json);
    })
    .catch(error => {
      dispatch({ type: "GET_LIST_USER_ERROR", payload: error });
      alert(error);
    });
};

export const getNewPortions = (
  selectedUser,
  dateStarted,
  dateEnding,
  servingSize,
  percentVerified
) => dispatch => {

  let data = new FormData();
  data.append("selectedUser", selectedUser);
  data.append("dateStarted", dateStarted);
  data.append("dateEnding", dateEnding);
  data.append("servingSize", servingSize);
  data.append("percentVerified", percentVerified);

  dispatch({ type: "GET_NEW_PORTION_STARTED" });
  dispatch({ type: "GET_COUPLE_PRODUCTS_STATED" });

  fetch("http://match.protarget.pro/backend/admin/getNewPortions.php", {
    method: "POST",
    body: data,
    credentials: "same-origin",
    headers: { Accept: "application/json" }
  })
    .then(res => res.json())
    .then(json => {
      if (json.result === "Ok") {
        let data = {
          id: json.id,
          date: json.date,
          id_answer: json.id_answer,
          answerUser: json.answerUser,
          userName: json.userName,
          result: json.result,
          statistics: json.statistics,
          massProducts: {
            oneProduct: json.oneProduct,
            twoProduct: json.newTwoProduct
          }
        };
        dispatch({ type: "GET_NEW_PORTION_SUCCESS" });
        dispatch({ type: "GET_COUPLE_PRODUCTS_SUCCESS", payload: data });
        dispatch({ type: "SEND_LOGIN_USER_SUCCESS", payload: json.userName });
      } else {
        dispatch({ type: "GET_COUPLE_PRODUCTS_LOGIN_ERROR" });
      }
      console.log("getListUser", json);
    })
    .catch(error => {
      dispatch({ type: "GET_NEW_PORTION_ERROR", payload: error });
      alert(error);
    });
};

export const updateSelectedUser = newValue => {
  if (newValue === "По всем") {
    return { type: "UPDATE_CURRENT_SELECTED_USER", payload: 0 };
  } else {
    return { type: "UPDATE_CURRENT_SELECTED_USER", payload: newValue };
  }
};

export const updateDateStarted = newValue => {
  return { type: "UPDATE_DATE_STARTED", payload: newValue };
};

export const updateDateEnding = newValue => {
  return { type: "UPDATE_DATE_ENDING", payload: newValue };
};

export const updateServingSize = newValue => {
  return { type: "UPDATE_SERVING_SIZE", payload: newValue };
};

export const updatePercentVerified = newValue => {
  return { type: "UPDATE_PERCENT_VERIFIED", payload: newValue };
};
