import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className=".gray-background">
          <img src={logo} className="App-logo" alt="logo" />  
          hello react project
        </header>
      </div>
    );
  }
}

export default App;
