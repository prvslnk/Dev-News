import React from 'react';
import './App.css';

function Header() {
    return (
        <header className="header">
            <div className="left">
                <div className="logo">
                    <img src="https://i.imgur.com/5T3Ypyd.png" alt="dev_news" />
                
                </div>
            </div>
            <div className="right">
            <div className="search-bar">
                <label>
                <input type="text" placeholder="Search 'Something' "/>
                <button type="submit">🔍</button>
                </label>
            </div>
            <div className="nav-buttons">
                <button>Home</button>
                <button>Subscribe</button>
                <button className="login">Login / Sign Up</button>
            </div>
            </div>
        </header>

    );
}

export default Header;
