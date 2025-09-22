import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const loc = useLocation();
  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand-box">
          <img src="/images/logo.png" alt="Logo" className="brand-img" />
          <h1 className="brand">
            <Link to="/">
              Doggy<br></br>Daycare
            </Link>
          </h1>
        </div>
        <nav>
          <Link className={loc.pathname === '/' ? 'active' : ''} to="/">
            Home
          </Link>
          <Link
            className={loc.pathname.startsWith('/catalog') ? 'active' : ''}
            to="/catalog"
          >
            Katalog
          </Link>
        </nav>
      </div>
    </header>
  );
}
