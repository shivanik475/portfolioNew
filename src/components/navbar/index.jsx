import React from "react";
import { FaReact } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './style.scss';

const data = [
    {
        label: 'HOME',
        TO: '/'
    },
    {
        label: 'ABOUT ME',
        TO: '/about'
    },
    {
        label: 'RESUME',
        TO: '/resume'
    },
    {
        label: 'SKILSS',
        TO: '/skills'
    },
    {
        label: 'PORTFOLIO',
        TO: '/portfolio'
    },
    {
        label: 'CONTACT ME',
        TO: '/contact'
    }
]

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar_container">
                <Link to={"/"} className="navbar_container_logo">
                    
                </Link>
                </div>
                <ul className="navbar_container_menu">
                    {
                        data.map((item, key) => (
                            <li key={key} className="=navbar_container_menu_item">
                                <Link className="navbar_container_menu_item_links" to={item.TO}>{item.label}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>

        </div>
    )

}

export default Navbar;