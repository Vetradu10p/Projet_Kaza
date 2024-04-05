import React from 'react';

import Banner from "@/Components/Banner";
import Collapse from "@/Components/Collapse";

import aboutinfo from "@/assets/Data/infocollapse.json";
import '@/Components/collapse.css'

import './about.css'

const About = () => {
    return (
        <section className='SectionAbout'>
            <Banner page="about"/>

            <ul className='ulCollapseContainer'>
                {
                    aboutinfo.map((collapse) => 
                        <Collapse key={collapse.id} title={collapse.title} description={collapse.description}/>
                    )
                }
            </ul>
        </section>
    );
};

export default About;