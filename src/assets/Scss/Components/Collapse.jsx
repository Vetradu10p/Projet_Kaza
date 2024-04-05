import React from 'react';
import flecheHaut from '@/assets/Images/Components/Collapse/CollapseFlecheHaut.png'
import flecheBas from '@/assets/Images/Components/Collapse/CollapseFlecheBas.png'

const Collapse = () => {
    return (
        <div>
            <img src={flecheHaut} alt="Flèche qui pointe vers le haut" />

            <img src={flecheBas} alt="Flèche qui pointe vers le bas" />
        </div>
    );
};

export default Collapse;