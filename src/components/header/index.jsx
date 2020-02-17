import React from 'react';
import './header.scss';

function Header() {
  return (
    <header className="header">
      <div className="headerWrp">
        <div className="brandWrp">
          <a href="/">Brand</a>
        </div>
        <div className="searchWrp">
          <input />
        </div>
        <div className="menuBtnWrp">
          <button type="button">nurger</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
