import React from 'react';

const Equipements = ({ equipments }) => {
    return (
            <ul>
                {equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                ))}
            </ul>
    );
};

export default Equipements;