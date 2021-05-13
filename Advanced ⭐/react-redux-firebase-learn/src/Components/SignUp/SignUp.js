import React, { useState } from 'react';
import './signup.css';

const INITIAL_STATE = {
    email: "",
    password: ""
}

export default function SignUp() {
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
        <div className="SignUp">
            <form onSubmit={handleSubmit}>
                <h3>Sign Up</h3>
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
                    <input type="submit" value="Sign Up" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}
