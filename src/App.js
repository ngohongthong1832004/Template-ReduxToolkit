import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import ListItem from './features/fakeApis/ListItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <h1>______________________________________________________________</h1>
        <ListItem />
      </header>
    </div>
  );
}

export default App;
