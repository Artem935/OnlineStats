// src/components/Header.js
import React, { useState, useEffect } from 'react';
import logo from "../img/logo.png"
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import userLogo from "../img/userLogo.png"
const Header = ({username}) => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie('token', { path: '/' });
    navigate('/login');
  };
  return (
    <div className="header">
      <div className="section logo">
        <img className="logo-img" src={logo} alt="Logo" />
      </div>
      <div className="section content">
        <h2>Home</h2>
      </div>
      <div className="section user">
        <div className="user-info" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <h2>{username}</h2>
          <img className="user-logo" src={userLogo} alt="User Logo" />
        </div>
        {isMenuOpen && (
          <div className="dropdown-menu">
            <button onClick={handleLogout}>Exit</button>
          </div>
        )}
      </div>
  </div>
  );
};

export default Header;
