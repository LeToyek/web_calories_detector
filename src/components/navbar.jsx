import { Squash as Hamburger } from 'hamburger-react';
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <h2>Calories</h2>
      </div>
      <div className="right">
        <Hamburger/>
      </div>
    </nav>
  );
};

export default Navbar;
