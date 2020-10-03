import React from 'react';
import axios from 'axios';
import Sidebar from './components/sidebar/Sidebar';
import Details from './components/details/Details';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Meagan Moore Ada Tech Challenge
        </h1>
      </header>
      <Sidebar />
      <Details />
    </div>
  );
}

export default App;
