import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ logout, user }) => {

    let token = window.localStorage.getItem('token')

    if (!token) {
        return (
            <header>
                <nav className='nav-bar'>
                    <div id='navtitle'>
                        Fitness Trackr
                    </div>
                    <ul className='navlist'>
                        <Link to='/home'>Home</Link>
                        <Link to='/routines'>Routines</Link>
                        <Link to='/myRoutines'>My Routines</Link>
                        <Link to='/activities'>Activities</Link>
                        <Link to='/register'>Register</Link>
                        <Link to='/login'>Login</Link>
                    </ul>
                </nav>
            </header>
        )
    } else {
        return (
            <header>
                <nav className='nav-bar'>
                    <div id='navtitle'>Fitness Trackr</div>
                    <ul className='navlist'>
                        <Link className='anchor' to='/home'>Home</Link>
                        <Link className='anchor' to='/routines'>Routines</Link>
                        <Link className='anchor' to='/myRoutines'>My Routines</Link>
                        <Link className='anchor' to='/activities'>Activities</Link>
                        <Link to='/home' onClick={() => logout()
                        }>Logout</Link>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Navbar;