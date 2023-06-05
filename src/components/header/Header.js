import React from 'react';
import './Header.css';
import { Link } from 'react-scroll';

function Header() {
  return (
    <header className="wrapper">
      <div className="wrapper-item-logo">
        <span className="logo gold-text">SIP</span>
        <span className="logo white-text">PAY</span>
      </div>
      <div className="wrapper-item-know-more-button">
        <Link
          className="know-more-button"
          to="info-grid-section"
          smooth={true}
          duration={500}
          offset={-50}
        >
          Know More
        </Link>
      </div>
    </header>
  );
}

export default Header;
