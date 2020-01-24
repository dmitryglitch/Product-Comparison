import React from 'react'


const ButtonBar = ({idCurrentCoupleProduct, sendAnswerCoupleProduct}) => {

    const handleClick = (answer) => {
        sendAnswerCoupleProduct(idCurrentCoupleProduct, answer);
    };

    return (
        <div className="button-bar-content">
            <div className="button-bar-content-left">
                <button>Back</button>
            </div>
            <div className="button-bar-content-center">
                <button onClick={() => handleClick('confirm')}>Confirm</button>
                <button onClick={() => handleClick('questions')}>Have questions</button>
                <button onClick={() => handleClick('unconfirmed')}>Unconfirmed</button>
            </div>
            <div className="button-bar-content-right">
                <button onClick={() => handleClick('Warning')}>Warning</button>
            </div>
        </div>
    )
};

export default ButtonBar;