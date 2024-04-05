import React from 'react';
import './card.css';

const Card = ({ image, title }) => {
    return (
        <li className="Card">
            <img className='Card-image' src={image} alt="Card d'un logement" />
            <div className="Card-sombre"></div>
            <h2 className='Card-title'>{title}</h2>
        </li>
    );
};

export default Card;