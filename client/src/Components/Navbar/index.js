import React from 'react';
import "./style.css";

const Navbar = () => {
    return (
        <header className="flex">
            <div className="f2"><h1>Google Books Search</h1></div>
            <nav className="f3">
                <ul>
                    <li>Search</li>
                    <li>|</li>
                    <li>Saved</li>
                </ul>
            </nav>
        </header>
    )
};

export default Navbar;