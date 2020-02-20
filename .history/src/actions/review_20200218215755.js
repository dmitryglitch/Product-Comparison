export const getListUser = () => dispatch => {
  dispatch({ type: "GET_LIST_USER_STARTED" });

  fetch("http://match-dev.protarget.pro/backend/admin/getUserList.php", {
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

export const updateSelectedUser = newValue => {
  return { type: "UPDATE_CURRENT_SELECTED_USER", payload: newValue };
};

export const updateDateStarted = newValue => {
  return { type: "UPDATE_CURRENT_SELECTED_USER", payload: newValue };
};

export const updateDateEnding = newValue => {
  return { type: "UPDATE_CURRENT_SELECTED_USER", payload: newValue };
};

export const updateServingSize = newValue => {
  return { type: "UPDATE_CURRENT_SELECTED_USER", payload: newValue };
};

export const updatePercentVerified = newValue => {
  return { type: "UPDATE_CURRENT_SELECTED_USER", payload: newValue };
};

