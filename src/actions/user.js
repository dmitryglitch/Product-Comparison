import { getCoupleProducts } from "./product";

export const checkUserStatus = () => dispatch => {
  dispatch({ type: "CHECK_USER_STATUS_STARTED" });

  fetch("http://match.protarget.pro/backend/admin/chekUserStatus.php", {
    method: "POST",
    credentials: "same-origin",
    headers: { Accept: "application/json" }
  })
    .then(res => res.json())
    .then(json => {
      console.log("checkUserStatus", json);
      if (json.result === "ok") {
        dispatch({ type: "CHECK_USER_STATUS_SUCCESS", payload: json });

        dispatch(getCoupleProducts(json.privilege));

        return true;
      } else {
        // console.log(json.errtext);
        alert(json.errtext);
        return false;
      }
    })
    .catch(error =>
      dispatch({ type: "CHECK_USER_STATUS_ERROR", payload: error })
    );
};

export const sendUserLogin = (userName, password) => dispatch => {
  dispatch({ type: "SEND_LOGIN_USER_STARTED" });

  let data = new FormData();
  data.append("userName", userName);
  data.append("password", password);

  fetch("http://match.protarget.pro/backend/isLogined.php", {
    method: "POST",
    credentials: "same-origin",
    headers: { Accept: "application/json" },
    body: data
  })
    .then(res => res.json())
    .then(json => {
      console.log("sendUserLogin", json);
      if (json.result === "ok") {
        dispatch({ type: "SEND_LOGIN_USER_SUCCESS", payload: json });
        window.location.reload();
      } else {
        // console.log(json.errtext);
        alert(json.errtext);
      }
    })
    .catch(error =>
      dispatch({ type: "SEND_LOGIN_USER_ERROR", payload: error })
    );
};

export const logOut = (userName, password) => dispatch => {
  dispatch({ type: "LOGOUT_USER_STARTED" });

  fetch("http://match.protarget.pro/backend/logOut.php", {
    method: "POST",
    credentials: "same-origin",
    headers: { Accept: "application/json" }
  })
    .then(res => res.json())
    .then(json => {
      console.log("logOut", json);
      if (json.result === "ok") {
        dispatch({ type: "LOGOUT_USER_SUCCESS", payload: json.userName });
        window.location.reload();
      } else {
        // console.log(json.errtext);
        alert(json.errtext);
      }
    })
    .catch(error => dispatch({ type: "LOGOUT_USER_ERROR", payload: error }));
};
