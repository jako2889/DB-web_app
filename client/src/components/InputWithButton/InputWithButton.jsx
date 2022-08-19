import React from 'react';

// STYLES
import './InputWithButton.scss';

const InputWithButton = ({ value, name, placeholder, type, onChange, btnText, action, validationError }) => (
  <div className="form-group">
    <input
      type={type}
      value={value}
      name={name}
      className={`form-control input ${validationError.error ? 'input-error' : ''}`}
      placeholder={placeholder}
      onChange={onChange}
    />
    <button disabled={validationError.error} className={`primary-btn with-input-btn ${validationError.error ? 'disabled-btn' : ''}`} type="button" onClick={action}>{btnText}</button>
    {validationError.error && <div className="validation-error"><p>{validationError.message}</p></div>}
  </div>
);

export default InputWithButton;