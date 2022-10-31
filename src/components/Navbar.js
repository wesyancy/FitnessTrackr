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
                        <button><Link to='/home'>Home</Link></button>
                        <button><Link to='/routines'>Routines</Link></button>
                        <button><Link to='/activities'>Activities</Link></button>
                        <button><Link to='/register'>Register</Link></button>
                        <button><Link to='/login'>Login</Link></button>
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
                        <button><Link className='anchor' to='/home'>Home</Link></button>
                        <button><Link className='anchor' to='/routines'>Routines</Link></button>
                        <button><Link className='anchor' to='/myRoutines'>My Routines</Link></button>
                        <button><Link className='anchor' to='/activities'>Activities</Link></button>
                        <button><Link to='/home' onClick={() => logout()}>Logout</Link></button>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Navbar;