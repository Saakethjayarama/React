import React from 'react'
import './nav.css'

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
            <ul>Login</ul>
            <ul>SignUp</ul>
        </div>
    )
}

function NavLinksSignedIn() {
    return (
        <div className="navlinks">
            <ul>Account</ul>
        </div>
    )
}



export default Nav;
