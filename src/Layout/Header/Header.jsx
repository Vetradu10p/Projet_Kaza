import React from 'react';
import { Link } from 'react-router-dom'
import './header.css'
import imglogo from '@/assets/Images/logo.png'
const Header = () => {
    return (
 
            <header>
                <img src={imglogo} className='imglogo'></img>
                <nav>
                    <ul>
                        <li className="right-links"><Link to="home">Acceuil</Link></li>
                        <li><Link to="about">A propos</Link></li>
                    </ul>
                </nav>
            </header>

    );
};

export default Header;