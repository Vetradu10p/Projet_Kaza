import React from 'react';

import '@/assets/Scss/Components/star.scss'

function getColorForRating(rating) {
    if (rating >= 1) return 'active';
    return '';
}

function RatingStars({ rating }) {
    return (
        <div className='RatingLogementDetail'>
            {[...Array(5)].map((_, index) => (
                <span key={index} className={`star ${getColorForRating(rating - index)}`}>&#9733;</span>
            ))}
        </div>
    );
}

export default RatingStars;
