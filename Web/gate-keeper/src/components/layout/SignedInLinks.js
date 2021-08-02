import React from 'react'
import { Link, NavLink } from 'react-router-dom';


const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating yello darken-5">AH</NavLink></li>
        </ul>

    )
}

export default SignedInLinks
