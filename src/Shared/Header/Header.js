import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import mickey from '../../assests/mickey.png'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Link to="/">
            <div className="mickeyImage" style={{backgroundImage:`url(${mickey})`}}>
            
            </div>
        </Link>
      </div>
    );
  }
}

export default Header;