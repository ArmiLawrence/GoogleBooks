import React from "react";
import {Link} from "react-router-dom";

function Nav() {
    return(
 
        <nav className="navbar fixed-top" style={{ marginBottom: "40px", height: "80px" }}>
        <ul className="nav navbar-nav navbar-left">
            <li>
            <a href="/" style={{ color: "white", textDecoration: "none", fontSize: "20px" }}>
                Google Books Search
            </a>
            </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
                <Link to="/">Home</Link>
                <Link to="/saved">Saved</Link>
        </ul>
        </nav>

    );
}

export default Nav;