import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import Login from './components/Login';
import AccountCreate from './components/AccountCreate';
import Main from './components/Main'; 
import GuestView from "./components/GuestView"

//i commented out the original code below. 

// import GuestView from './components/GuestView';
//import ProductList from './components/ProductList';


function App() {
  return (
    <div className="wrapper">
      
      <BrowserRouter>
        <Switch>
         <Route exact path="/">
            <Main />
         </Route>
         <Route exact path="/accountCreate">
            <AccountCreate />
         </Route>
         <Route exact path="/login">
            <Login />
         </Route>
         <GuestView/>
         {/* <Route exact path="/guestView">
            <GuestView />
         </Route> */}
         <Route exact path="/registry">
          <ProductList />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );

}

export default App;