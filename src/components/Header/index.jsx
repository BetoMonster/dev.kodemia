import React from 'react';

import AppButton from '../AppButton';
//import CreateAccountButton from './CreateAccountButton';
import SearchInput from './SearchInput';
import HeaderLogo from './HeaderLogo';
import AppThemeToggle from '../AppThemeToggle';

//import Styles from './Header.module.css'
import  './index.css';

class Header extends React.Component{
  render(){
    return(
      /*<nav clasName={Styles.Header}>*/
      <nav className="header d-flex justify-content-between align-items-center">
        <div className="logo-search d-flex justify-content-center align-items-center">
          <HeaderLogo/>
          <SearchInput/>
        </div>
        <div className="auth d-flex justify-content-center align-items-center">
          <AppButton 
            type="anchor"
            text="Log In"
            
          />
          <AppButton 
            type="anchor"
            text="Create account"
            className="btn-primary"
          />
          <AppThemeToggle/>
        </div>
      </nav>
    )
  }
}

export default Header; //<--equivalente a module.exports = Header
