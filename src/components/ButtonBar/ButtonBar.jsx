import React from 'react'


const ButtonBar = ({
                       idCurrentCoupleProduct,
                       sendAnswerCoupleProduct,
                       getBackCoupleProducts,
                       dateCoupleProducts,
                       answerUser,
                       statistics
                   }) => {

    const handleClick = (answer) => {
        sendAnswerCoupleProduct(idCurrentCoupleProduct, answer);
    };

    const handleClickOnBackButton = ({}) => {
        console.log('dateCP', dateCoupleProducts);
        getBackCoupleProducts(dateCoupleProducts)
    };

    return (
        <>
            <div className="button-bar-content">
                <div className="button-bar-content-top">
                    <div className="button-bar-content-left">
                        <button onClick={handleClickOnBackButton}>Back</button>
                    </div>
                    <div className="button-bar-content-center">
                        <div className="button-bar-content-center-bt">
                            <button className="btn-confirm" onClick={() => handleClick('confirm')}>Confirm</button>
                            <button className="btn-questions" onClick={() => handleClick('questions')}>Have questions
                            </button>
                            <button className="btn-unconfirmed" onClick={() => handleClick('unconfirmed')}>Unconfirmed
                            </button>
                        </div>
                    </div>
                    <div className="button-bar-content-right">
                        <button className="btn-mismatch" onClick={() => handleClick('unconfirmed_image')}>Image
                            Mismatch
                        </button>
                        <button className="btn-warning" onClick={() => handleClick('warning')}>Warning</button>
                    </div>
                </div>
                <div className="button-bar-content-down">
                    <div className="statistic-container">
                        <p>Solved all: {statistics.all}</p>
                        <p>Solved today: {statistics.today}</p>
                        <p>Solved yesterday: {statistics.yesterday}</p>
                        <p>Solved answer: {answerUser}</p>

                    </div>
                </div>
            </div>
            <div className="button-bar-info">
                <div className="button-bar-info-content">
                    <p>{idCurrentCoupleProduct}</p>
                </div>
            </div>
        </>
    )
};

export default ButtonBar;