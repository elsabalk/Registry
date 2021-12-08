import React from "react";
import './Main.css';
import logo from "../images/lovebirds.ico"

function Main() {
  return (
    <div className="main">
      <div className="main__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
          <img src={logo} alt=""/>
          </div>  
             {/* Navbar */}
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Main"><li className="nav__items mx__15">Main</li></a>
              <a href="#Guest View"><li className="nav__items mx__15">Guest View</li></a>
              <a href="#Look Up Registry"><li className="nav__items mx__15">Look Up Registry</li></a>
              <a href="#Sign In"><li className="nav__items mx__15">Sign In</li></a>
              <a href="#Create new Account"><li className="nav__items mx__15">Create new Account</li></a>

            </ul>
          </div>
      </div>
        </div>
       
    {/* The Main Content */}
    <div className="container">
          <div className="main__content">
            <div className="main__meta">
              <h1 className="main__text pz__10">WELCOME Our Registry</h1>
              <h2 className="main__text pz__10">This is John Doe</h2>
              <h3 className="main__text sweet pz__10">soon to be couples.</h3>
              <h4 className="main__text pz__10">And this this Jane Doe.</h4>
            </div>
          </div>
       

    </div>
    </div>

  )
}

export default Main




// This is the older version......


// import React from 'react';
// import { Link} from 'react-router-dom';
// import Header from "./HomeHeader";

// export default function Main() {
//   return (
//     <>
//         <Header />
    
//         <div className="button"><Link to="/guestView"> Look Up a Registry</Link></div>
//         <div className="button"><Link to="/login">Sign In</Link></div>
//         <div className="button"><Link to="/accountCreate">Create an Account</Link></div>
//     </>
  
//   )
 
// }