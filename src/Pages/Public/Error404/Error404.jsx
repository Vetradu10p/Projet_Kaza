import React from 'react';
import { Link } from 'react-router-dom';

import '@/assets/Scss/Pages/Public/Error404/error404.scss'


const Error404 = () => {
    return (
        <section className='SectionError'>
            
                <h2 className='TitleError'>404</h2>
           
                <p className='MessageError'>Oups! La page que vous demandez n'existe pas.</p>
        
                <Link className='LinkError' to="home" >Retourner sur la page d’accueil</Link>
           
        </section>
    );
};

export default Error404;