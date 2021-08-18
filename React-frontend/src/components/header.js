import React from 'react';
import '../style/header.css';
import SignOut from './SignOut';
import SignIn from './SignIn';

import {auth} from '../firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth';

function Header() {

    const [user] = useAuthState(auth);
    return (
        <div className="header">
            <h1>Cryptochat web application</h1>
            <p>Django rest framework for backend</p>
            <p>React front end</p>
            <div className='log-out'>{user ? <SignOut/> : <SignIn/>}</div>
        </div>
    )
        
}


export default Header;