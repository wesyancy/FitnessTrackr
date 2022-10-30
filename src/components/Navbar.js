import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ logout, user }) => {

    let token = window.localStorage.getItem('token')

    if (!token) {
        return (
            <header>
                <nav id='navbar'>
                    <div id='navtitle'>Fitness Trackr</div>
                    <ul id='navlist'>
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/routines'>Routines</Link></li>
                        <li><Link to='/activities'>Activities</Link></li>
                        <li><Link to='/register'>Register</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </nav>
            </header>
        )
    } else {
        return (
            <header>
                <nav id='navbar'>
                    <div id='navtitle'>Fitness Trackr</div>
                    <ul id='navlist'>
                        <li><Link className='anchor' to='/home'>Home</Link></li>
                        <li><Link className='anchor' to='/routines'>Routines</Link></li>
                        <li><Link className='anchor' to='/myRoutines'>My Routines</Link></li>
                        <li><Link className='anchor' to='/activities'>Activities</Link></li>
                        <li><Link to='/home' onClick={() => logout()}>Logout</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Navbar;