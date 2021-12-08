import React from 'react';
import { Link} from 'react-router-dom';
import Header from "./HomeHeader";

export default function Main() {
  return (
    <>
        <Header />
    
        <div className="button"><Link to="/guestView"> Look Up a Registry</Link></div>
        <div className="button"><Link to="/login">Sign In</Link></div>
        <div className="button"><Link to="/accountCreate">Create an Account</Link></div>
    </>
  
  )
 
}