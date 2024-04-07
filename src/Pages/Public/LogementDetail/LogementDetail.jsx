import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { LogementService } from '@/_service/logement.service';

import Collapse from '@/Components/Collapse';
import RatingStars from '@/Components/Star';
import Gallery from '@/Components/Gallery';
import Equipements from '@/Components/Equipments';

// import './LogementDetail.css'
import '@/assets/Scss/Components/logementDetail.scss'

const LogementDetail = () => {

    const [logement, setLogement] = useState({});
    const [waiting, setwaiting] = useState(true);

    const { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        const fetchLogement = async () => {
            await LogementService.GetOneLogement(id)
                .then((data) => {
                    if (data) {
                        setLogement(data);
                        setwaiting(false);
                    } else {
                        navigate("404");
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        };

        fetchLogement();
    }, [id]);


    if (waiting) return (<h3>Loading...</h3>);

    return (
        <div className='BodyLogementDetailContainer'>

            <div className='LogementDetailContainer'>
                <Gallery pictures={logement.pictures} />
            </div>
            <div>
                <div className='TitleLogementDetailContainer'>
                    <div className='GaucheLogementDetailContainer'>
                        <h3 className='TitleLogementDetail'>{logement.title}</h3>
                        <p className='LocationLogementDetail'>{logement.location}</p>
                        <ul className='TagLogementDetail'> {logement.tags.map((tag, index) => (<li key={index}>{tag}</li>))}</ul>
                    </div>
                    <div className='DroiteLogementDetailContainer'>
                        <div className='HostLogementDetailContainer' >
                            <img className='HostPictureLogementDetail' src={logement.host.picture} alt={`Photo de profil de ${logement.host.name}`} />
                            <p className='HostNameLogementDetail'>{logement.host.name}</p>
                        </div>
                        <RatingStars rating={logement.rating} />
                    </div>
                </div>
                <div className='CollapseLogementDetailContainer'>
                    <Collapse title="Description" description={logement.description} ></Collapse>
                    <Collapse title="Equipements" ><ul className='EquipmentLogementDetail'>{logement.equipments.map((equipments, index) => (<li key={index}>{equipments}</li>))}</ul></Collapse>
                </div>
            </div>

        </div>
    );
};

export default LogementDetail;