import React from 'react';
import './App.css';

import { useSavedList } from "./hooks/useSavedList";

import Display from "./components/Display";
import Navbar from "./components/Navbar";
import SavedList from "./components/SavedList";


function App() {
  let [list, handleSave] = useSavedList();
  return (
    <div className="container">
      <Navbar />
      <SavedList list={list}/>
      <Display handleSave={handleSave}/>
    </div>
  );
}

export default App;
