import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { LogementService } from '@/_service/logement.service';
import './logementsListe.css'

// function LogementsListe() {
//   const [logements, setLogements] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();
  
//   let { id } = useParams();

//   useEffect(() => {
//     getInfo();
//   }, [id]);


//   const getInfo = async () => {
//     await LogementService.GetOneLogement(id)
//         .then((data) => {
//             if (data) {
//               setLogements(data);
//                 setIsLoading(false);
//             } else {
//                 navigate("/404")
//             }
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// }

//   return (
//     <div className='logement-container'>
//       <ul className='logement-liste'>
//         {logements.map((logement, index) => (
//           <li key={index} className='logement-card'>
//             <a href={`/logement/${logement.id}`}>
//             <img src={logement.cover} alt={logement.title} />
//             <div className='logement-title'>{logement.title}</div> 
//             </a>
//             </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default LogementsListe;


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