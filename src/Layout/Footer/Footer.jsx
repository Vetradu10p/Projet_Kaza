import React from 'react';

import '@/assets/Scss/Layout/Footer/footer.scss'

import logofooter from "@/assets/Images/logofooter.png"
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="logo">
            <img src={logofooter} alt="Logo de Kasa" />
            </div>
            <div className="allRight">
                <p>© 2024 Kasa. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;