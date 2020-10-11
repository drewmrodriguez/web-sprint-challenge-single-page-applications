import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {

    render() {

        return (
            
            <nav className="cyan">
            <div className="nav-wrapper">
                <Link to="/" href="#" className="brand-logo">Lambda-Eatz</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                <Link to="/">Home</Link>
                </li>
                
                <li>
                <Link to="/Form">Order</Link>
                </li>
                </ul>
            </div>
            </nav>
      
        )
    }
}

export default Navbar
