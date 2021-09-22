import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];
  return (
    <ul className="navLinks">
      { links.map((link) => (
        <li key={link.id} className="hoverLink">
          <NavLink to={link.path}>
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
