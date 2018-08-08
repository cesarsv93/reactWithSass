import React, { Component } from 'react';
import Logo from "../assets/img/logo1.png";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="navbar">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <ul className="navbar__list">
            <li className="navbar__item"><a href="#" className="navbar__link">Escorts</a></li>
            <li className="navbar__item"><a href="#" className="navbar__link">Escorts</a></li>
            <li className="navbar__item"><a href="#" className="navbar__link">Escorts</a></li>
            <li className="navbar__item"><a href="#" className="navbar__link">Escorts</a></li>
            <li className="navbar__item"><a href="#" className="navbar__link">Escorts</a></li>
            <li className="navbar__item"><a href="#" className="navbar__link">Escorts</a></li>
          </ul>
        </div>
      </header>

    );
  }
}

export default Header;
