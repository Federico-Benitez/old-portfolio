import React from 'react';
import avatar from '../img/avatar.jpeg';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img src={avatar} alt="" />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/portfolio/" exact activeClassName="active">
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio/about" exact activeClassName="active">
              Información
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio/portfolios" exact activeClassName="active">
              Portfolios
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink to="/portfolio/contact" exact activeClassName="active">
              Contacto
            </NavLink>
          </li> */}
        </ul>
        <footer className="footer">
          <p>@2021 Benitez Federico</p>
        </footer>
      </nav>
    </div>
  );
}

export default NavBar;
