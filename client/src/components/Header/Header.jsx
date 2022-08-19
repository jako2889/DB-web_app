import React from 'react';

// STYLES
import './Header.scss';

const Header = () => {
  return (
    <div className="header-container">
        <div className="header-elements">
            <div className="link-container selected">
                <p>Home</p>
            </div>
            <div className="link-container">
                <p>About</p>
            </div>
            <div className="link-container">
                <p>FAQ</p>
            </div>
        </div>
    </div>
  )
}

export default Header