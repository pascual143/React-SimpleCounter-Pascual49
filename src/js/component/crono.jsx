import React from "react";
import propTypes from "prop-types";

const cronometro = (props) => {
  return(
    <>
      <div className="wholeCounter d-flex justify-content-around">
        <div className="calendar">
          <i className="far fa-clock"></i>
        </div>
        <div className="hundredThousands">{props.secSix}</div>
        <div className="tenThousands">{props.secFive}</div>
        <div className="thousands">{props.secFour}</div>
        <div className="hundreds">{props.secThree}</div>
        <div className="tens">{props.secTwo}</div>
        <div className="ones">{props.secOne}</div>
      </div>
      <div className="btn-group d-flex justify-content-center mx-5">
        <button type="button" className="btn btn-dark">Pause</button>
        <button type="button" className="btn btn-dark">Resume</button>
        <button type="button" className="btn btn-dark">Reset</button>
      </div>
    </>
    );
  }
  cronometro.propTypes = {
    secOne: propTypes.number,
    secTwo: propTypes.number,
    secThree: propTypes.number,
    secFour: propTypes.number,
    secFive: propTypes.number,
    secSix: propTypes.number
  };

export default cronometro
