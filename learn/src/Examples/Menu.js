import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <div className="content">
            <Link to="/time">
                1. Time<br /><br />
            </Link>
            <Link to="/oddeven">
                2. Odd Even<br /><br />
            </Link>
            <Link to="/details">
                3. Bio<br /><br />
            </Link>
        </div>  
    )
}

export default Menu
