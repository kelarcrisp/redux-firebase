import React from 'react';
import { NavLink } from 'react-router-dom';


const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/signout'>Signup</NavLink></li>
            <li><NavLink to='/signin'>LogIn</NavLink></li>

        </ul >
    )
}
export default SignedOutLinks;