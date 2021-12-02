import React, { Component } from 'react';
import AccountCreate from './components/AccountCreate';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
         <AccountCreate/>
      </div>
    );
  }
}

export default App;