import React, { useState } from 'react';
import './signin.css';

const INITIAL_STATE = {
    email: "",
    password: ""
}

export default function SignIn() {
    const [state, setState] = useState(INITIAL_STATE)

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
    }



    return (
        <div className="SignIn">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Email" 
                    name="email"
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    name="password"
                    onChange={handleChange}
                />
                <div className="btn-wrap">
                    <input type="submit" value="Submit" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}
