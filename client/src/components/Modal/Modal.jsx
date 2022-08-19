import React from 'react';

// STYLES
import './Modal.scss';

const Modal = ({ close, data }) => {
  return (
    <>
      <div className="overlay" onClick={() => close()} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Calculated values</h5>
          </div>
          <div className="modalContent">
            {data.val3} * {data.val5} = {data.calculatedValue}
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="primary-btn" onClick={() => close()}>
                Close window
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;