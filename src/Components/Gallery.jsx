import React, { useState } from 'react';

import flechehaut from "@/assets/Images/Components/Collapse/CollapseFlecheBas.png";
import flechebas from "@/assets/Images/Components/Collapse/CollapseFlecheHaut.png";

import '@/assets/Scss/Components/gallery.scss'

const Gallery = ({ pictures }) => {

    const [index, setIndex] = useState(0);

    const previousImage = () => {
        setIndex((prevIndex) => prevIndex === 0 ? pictures.length - 1 : prevIndex - 1)
    }

    const nextImage = () => {
        setIndex((prevIndex) => prevIndex + 1 === pictures.length ? 0 : prevIndex + 1)
    }

    return (

        <div className="slideshow">
            {
                pictures.length > 1 && (
                    <img className="arrowLeft" src={flechehaut} alt="flèche gauche" onClick={() => previousImage()} />
                )
            }
            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {pictures.map((picture, index) => (
                    <div className="slide" key={index} style={{ background: `no-repeat center/cover url(${picture})` }}></div>

                ))}
            </div>
            {
                pictures.length > 1 && (
                    <>
                        <img className="arrowRight" src={flechebas} alt="flèche droite" onClick={() => nextImage()} />
                        <span className="paging"> {index + 1} / {pictures.length} </span>
                    </>
                )
            }
        </div>
    );

}

export default Gallery;