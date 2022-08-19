import React from 'react';

// COMPONENTS
import Header from '../Header/Header';

// STYLES
import './Layout.scss';

const Layout = ({children}) => {
  return (
    <div className="layout">
    <Header />
    <div className="content">
      {children}
    </div>
  </div>
  )
}

export default Layout;