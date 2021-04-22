import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Learn extends Component {

    render() {
		return(
            <div>
                From YT:- CodingEntrepreneurs <br/><br/>
                <Link to="/props">
                    1. Props 
                </Link><br /> 
                <Link to="/textInput">
                    2. Text Input
                </Link><br />
                <Link to="/checkBox">
                    3. Check Box
                </Link><br />
                <Link to="/radio">
                    4. Radio Button
                </Link><br />
                <Link to="/select">
                    5. Select
                </Link>
            </div>
        )
    }
}

export default Learn