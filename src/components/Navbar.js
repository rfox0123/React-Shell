import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './CSS/Navbar.css'

class Navbar extends Component {
    render(){
        return(
            <div>
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/page_1">Page 1</NavLink></li>
                        <li><NavLink to="/page_2">Page 2</NavLink></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar;