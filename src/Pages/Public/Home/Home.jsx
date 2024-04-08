import React from 'react';
import { NavLink } from 'react-router-dom';
import { LogementService } from "@/_service/logement.service";

import Banner from '@/Components/Banner';
import Card from '@/Components/Card';

import imgbanner from "@/assets/Images/Section1.jpeg";

import '@/assets/Scss/Pages/Public/Home/home.scss'


const Home = () => {
    return (
        <section className='SectionHome'>
            <Banner image={imgbanner} title="Chez vous, partout et ailleurs" />

            <ul className='ApartementGallery'>
                {
                    LogementService.GetAllLogement().map((logement) =>
                        <NavLink key={logement.id} to={"/LogementDetail/" + logement.id}>
                            <Card image={logement.cover} title={logement.title} />
                        </NavLink>
                    )
                }
            </ul>
        </section>
    );
};

export default Home;