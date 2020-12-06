import React from 'react';
import "./style.css";

const Navbar = () => {
    return (
        <header class="flex">
            <div class="f2"><h1>Google Books Search</h1></div>
            <nav class="f3">
                <ul>
                    <li>Search</li>
                    <li>Saved</li>
                </ul>
            </nav>
        </header>
    )
};

export default Navbar;