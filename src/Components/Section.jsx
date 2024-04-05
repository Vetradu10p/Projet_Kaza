import React from 'react';


function Banner({ pictures, texte }) {


  return (
    <div className="section">
      <div className="image-container">
        <img src={pictures} alt="Image d'une falaise'" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        <p>{texte}</p>
      </div>
    </div>
  );
}

export default Banner;
