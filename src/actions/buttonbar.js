import { getCoupleProducts } from "./product";

export const sendAnswerCoupleProduct = (id, answer, privilege) => dispatch => {
  dispatch({ type: "SEND_ANSWER_STARTED" });

  let url = "" 
  if (privilege === 1) {
    url = 'http://match.protarget.pro/backend/admin/setUserAnswer.php'
  } else {
    url = 'http://match.protarget.pro/backend/setUserAnswer.php'
  }

  let data = new FormData();
  data.append("id", id);
  data.append("answer", answer);

  fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: { Accept: "application/json" },
    body: data
  })
    .then(res => res.json())
    .then(json => {
      dispatch({ type: "SEND_ANSWER_SUCCESS", payload: data });
      console.log(json);

      if (json.check === true) {
        dispatch(getCoupleProducts(json.privilege));
      }
    })
    .catch(error => {
      dispatch({ type: "SEND_ANSWER_ERROR", payload: error });
      alert(error);
    });
};
