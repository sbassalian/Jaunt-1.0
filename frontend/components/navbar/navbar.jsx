import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = ({ currentUser, logout }) => {
    const displayLinks = () => (
        <nav>
            <Link to="/login">Log in</Link>
      <br/>
            <Link to="/signup">Sign up</Link>
        </nav>
    );
    const displayMessage = () => (
       <div>
            <p>{currentUser.first_name} {currentUser.last_name}</p>
           <button onClick={logout}>Sign Out</button>
       </div>

    );
    console.log(currentUser);
    console.log(!!currentUser);
    
    return currentUser ? displayMessage() : displayLinks();
};


export default NavBar;
