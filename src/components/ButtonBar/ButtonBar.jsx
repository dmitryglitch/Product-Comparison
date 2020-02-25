import React from "react";

const ButtonBar = ({
  idCurrentCoupleProduct,
  sendAnswerCoupleProduct,
  getBackCoupleProducts,
  getForwardCoupleProducts,
  dateCoupleProducts,
  answerUser,
  privilege,
  statistics
}) => {
  const handleClick = answer => {
    sendAnswerCoupleProduct(idCurrentCoupleProduct, answer, privilege);
  };

  const handleClickOnBackButton = () => {
    getBackCoupleProducts(dateCoupleProducts);
  };

  const handleClickOnForwardButton = () => {
    getForwardCoupleProducts(dateCoupleProducts);
  };

  return (
    <>
      <div className="button-bar-content">
        <div className="button-bar-content-top">
          <div className="button-bar-content-left">
            <img
              onClick={handleClickOnBackButton}
              src={require("./assets/back.png")}
              alt=""
            />
            <img
              onClick={handleClickOnForwardButton}
              src={require("./assets/forward.png")}
              alt=""
            />
          </div>
          <div className="button-bar-content-center">
            <div className="button-bar-content-center-bt">
              <img
                onClick={() => handleClick("confirm")}
                src={require("./assets/confirm.png")}
                alt=""
              />
              <img
                src={require("./assets/questions.png")}
                onClick={() => handleClick("questions")}
                alt=""
              />
              <img
                src={require("./assets/uncomfirmed.png")}
                onClick={() => handleClick("unconfirmed")}
                alt=""
              />
            </div>
          </div>
          <div className="button-bar-content-right">
            <img
              src={require("./assets/imagem.png")}
              onClick={() => handleClick("unconfirmed_image")}
              alt=""
            />
            <img
              src={require("./assets/warning.png")}
              onClick={() => handleClick("warning")}
              alt=""
            />
          </div>
        </div>
        <div className="button-bar-content-down">
          <div className="statistic-container">
            {(() => {
              if (privilege === 0) {
                return (
                  <>
                    <p>Solved all: {statistics.all}</p>
                    <p>Solved today: {statistics.today}</p>
                    <p>Solved yesterday: {statistics.yesterday}</p>
                    <p>Solved answer: {answerUser}</p>
                  </>
                );
              }
            })()}
          </div>
        </div>
      </div>
      <div className="button-bar-info">
        <div className="button-bar-info-content">
          <p>{idCurrentCoupleProduct}</p>
        </div>
      </div>
    </>
  );
};

export default ButtonBar;
