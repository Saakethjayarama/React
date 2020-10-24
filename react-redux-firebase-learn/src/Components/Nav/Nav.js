import React from 'react'
import './nav.css'

import {Link} from 'react-router-dom';

function Nav() {
    const state = false;

    return (
        <nav className="Nav">
            <div className="logo">
                <h2>CSVS</h2>
            </div>
            {state ? <NavLinksSignedIn /> : <NavlinkNotSignedId/>}
        </nav>
    )
}

function NavlinkNotSignedId() {
    return (
        <div className="navlinks">
            <Link to="/signin"><ul>Login</ul></Link>
            <Link to="/signup"><ul>SignUp</ul></Link>
        </div>
    )
}

function NavLinksSignedIn() {
    return (
        <div className="navlinks">
            <Link to="/landing"><ul>Account</ul></Link>
        </div>
    )
}



export default Nav;
