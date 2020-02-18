import {getCoupleProducts} from './product'

export const sendAnswerCoupleProduct = (id, answer) => dispatch => {
    dispatch({type: 'SEND_ANSWER_STARTED'});
    console.log("ID",id);
    console.log("ANSWER",answer);

    let data = new FormData();
    data.append('id', id);
    data.append('answer', answer);

    fetch(
        'http://match-dev.protarget.pro/backend/setUserAnswer.php', {
            method: "POST",
            credentials: 'same-origin',
            headers: {Accept: "application/json"},
            body: data,
        })
        .then(res => res.json())
        .then(json => {
            // dispatch({type: 'SEND_ANSWER_SUCCESS', payload: data});
            console.log(json);

            if (json.check === true) {
                dispatch(getCoupleProducts())
            }
        })
    .catch(error => alert(error));
    // .catch(error => dispatch({type: 'SEND_ANSWER_ERROR', payload: error}));
};