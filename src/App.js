import React from 'react';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        {console.log('return')}
        <h1>Welcome to my World!</h1>
      </div>
    );
  }
}