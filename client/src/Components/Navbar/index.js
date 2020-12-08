import React from 'react';
import "./style.css";

const Navbar = () => {
    return (
        <header className="flex">
            <div className="f2"><h1>Google Books Search</h1></div>
            <nav className="f3">
                <ul>
                    <li><a href="/search">Search</a></li>
                    <li>|</li>
                    <li><a href="/saved">Saved</a></li>
                </ul>
            </nav>
        </header>
    )
};

export default Navbar;