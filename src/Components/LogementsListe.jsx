import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { LogementService } from '@/_service/logement.service';

import '@/assets/Scss/Components/logementsListe.scss'


function LogementsListe() {
  const [logement, setLogement] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchLogement = async () => {
      const logementData = await LogementService.GetOneLogement(id);
      setLogement(logementData);
    };

    fetchLogement();
  }, [id]);

  if (!logement) {
    return <div>Loading...</div>;
  }

  return (
    <div className='logement-container'>
      <div className='logement-card'>
        <a href={`/logement/${logement.id}`}>
          <img src={logement.cover} alt={logement.title} />
          <div className='logement-title'>{logement.title}</div> 
        </a>
      </div>
    </div>
  );
}

export default LogementsListe;