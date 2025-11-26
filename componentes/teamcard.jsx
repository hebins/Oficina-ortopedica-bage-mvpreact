// react/componentes/teamcard.jsx

import React from 'react';

function TeamCard({ imageSrc, imageAlt, name, role, specialty, details }) {
  return (
    <div className="team-card"> 
      <img src={imageSrc} alt={imageAlt} />
      
      <h3>{name}</h3>
      <p className="role">{role}</p>
      <p className="specialty">{specialty}</p>
      <p className="details">{details}</p>
      <a href="#contato">Detalhes de Contato</a>
    </div>
  );
}

export default TeamCard;