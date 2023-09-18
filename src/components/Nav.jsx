import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar" style={{ backgroundColor: 'black' }}>
            <div className="container">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link fw-bold" href='#'>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-bold" href='#'>Post</a>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link fw-bold">Login</Link>
                    </li>
                </ul>
                <form className="navbar-search">
                    <input className="form-control" placeholder="Search..." aria-label="Search" type='Search' />
                </form>
            </div>
        </nav>
    );
}