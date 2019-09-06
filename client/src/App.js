import React from 'react';
import logo from './logo.svg';
import './App.css';

import Display from "./components/Display";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Display />
    </div>
  );
}

export default App;
