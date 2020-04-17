import React from "react";
import './header.css'
import andrena_logo from './andrena_logo.jpg';

export function Header() {
    return (
        <header>
            <div id="header-container">
                <div className="pic">
                    <img src={andrena_logo} id="logo2" alt="andrena objects"/>
                </div>
                <div className="headline"><h1>Mars Rover Kata</h1></div>
                <div className="pic">
                    <img src={andrena_logo} id="logo1" alt="andrena objects"/>
                </div>
            </div>
        </header>);
}