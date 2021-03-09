import React from "react";
import logo from "../../photo/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header-container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="Navigation">
        <nav>
          <a href="/home">Home</a>
          <a href="/players">Players</a>
          <a href="/club">Clubs</a>
          <a href="Standings">Standings</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
