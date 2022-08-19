import React from 'react';

// STYLES
import './ErrorMessage.scss';

const ErrorMessage = ({ error, back }) => {
  return (
    <div className="error-container">
        <h2>Whoops! Something went wrong.</h2>
        <p>{error.message}</p>
        <button type="button" class="primary-btn" onClick={() => back()}>Go back</button>
    </div>
  )
}

export default ErrorMessage