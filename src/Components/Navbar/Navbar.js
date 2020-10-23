import React from "react"
import "./Navbar.scss"

import Holidays from "../Navbar/ctravels.png"

export default function Navbar() {
    return (
        <nav className = "navbar">
            
            <img src = {Holidays} alt = "Tours" height = "100px"/>
            <ul class = "nav-links">
                <li>
                    <a href = "/" className = "nav-link">Home</a>   
                </li>
                <li>
                    <a href = "/" className = "nav-lnk">About</a>   
                </li>
                <li>
                    <a href = "/" className = "nav-ink" active>Tours</a>   
                </li>
            </ul>
        </nav>
    )
}
