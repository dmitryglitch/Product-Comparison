export const sendUserLogin = (userName, password) => dispatch => {
    dispatch({type: 'SEND_LOGIN_USER_STARTED'});

    let data = new FormData();
    data.append('userName', userName);
    data.append('password', password);

    fetch(
        'http://match.protarget.pro/backend/isLogined.php', {
            method: "POST",
            credentials: 'same-origin',
            headers: {Accept: "application/json"},
            body: data,
        })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            if (json.result === 'ok') {
                dispatch({type: 'SEND_LOGIN_USER_SUCCESS', payload: json.userName});
                window.location.reload();
            } else {
                // console.log(json.errtext);
                alert(json.errtext)
            }
        })
        .catch(error => dispatch({type: 'SEND_LOGIN_USER_ERROR', payload: error}));
};