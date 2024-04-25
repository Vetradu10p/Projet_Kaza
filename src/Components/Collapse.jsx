import React, { useState } from 'react';

import flechebas from "@/assets/Images/Components/Collapse/CollapseFlecheBas.png";

const Collapse = ({ title, description, children }) => {

    const [isOpen, setopen] = useState(false);

    const toggleCollapse = () => {
        setopen(!isOpen);
    }


    return (
        <li className='Collapse-Container'>
            <div className='Collapse-header' onClick={toggleCollapse}>
                <h2>{title}</h2>
                <span>
                    <img src={flechebas} alt="flechesClick" className={isOpen ? 'rotate' : ''} />

                </span>
            </div>
            {
                isOpen && (
                    <div className={`Collapse-description ${isOpen ? 'open' : ''}`}>
                        {description}
                        {children}
                    </div>
                )
            }
        </li>
    );
};

export default Collapse;