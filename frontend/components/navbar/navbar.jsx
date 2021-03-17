import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = ({ currentUser, logout }) => {
    const displayLinks = () => (
        <div>
            <Link to="/login">Log in</Link>
            <Link to="/signup">Sign up</Link>
        </div>
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
