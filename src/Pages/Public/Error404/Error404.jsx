import React from 'react';
import { Link } from 'react-router-dom';
import './error404.css'


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