import React from 'react';

function EquipmentsList({ equipments }) {
    return (
        <ul>
            {equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
            ))}
        </ul>
    );
}

export default EquipmentsList;
