import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <div className="logoContainer">
        <img
          src="/ag-grid-brandmark.svg"
          className="navbarIcon"
          alt="AG Grid Brandmark"
        />
        <h1>AG Grid & AG Charts Dashboard</h1>
      </div>
      <nav className="linksContainer">
        <a
          href="https://www.ag-grid.com/react-data-grid/getting-started"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          AG Grid Docs
        </a>
        <a
          href="https://www.ag-grid.com/charts/react"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          AG Charts Docs
        </a>
      </nav>
    </header>
  );
};

export default Header;
