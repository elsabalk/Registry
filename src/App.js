import React, { Component } from 'react';
import AccountCreate from './components/AccountCreate';
import Login from './components/Login';
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <div className="App">
         <ProductList />
      </div>
    );
  }
}

export default App;