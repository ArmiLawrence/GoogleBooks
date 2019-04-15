import React from "react";
import {Link} from "react-router-dom";

function Nav() {
    return(
        <nav >
            <h2>Google Books Search </h2>
            <Link to="/">Home</Link>
            <br></br> 
            <Link to="/saved">Saved</Link>
        </nav>
    );
}

export default Nav;