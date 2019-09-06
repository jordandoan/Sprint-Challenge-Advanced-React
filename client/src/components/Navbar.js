import React from 'react';

import { useDarkMode } from "../hooks/useDarkMode";

const Navbar = () => {
  const [setDark] = useDarkMode();
  
  return (
    <div className="navbar">
      <h1>Popular Women from Tennis World Cup</h1>
      <button onClick={setDark}>Dark Mode?</button>
    </div>
  )
}

export default Navbar;