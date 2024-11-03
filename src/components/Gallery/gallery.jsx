import React from 'react';
import { Link } from 'react-router-dom';
import logements from '../../Listing/logements.json';
import Card from '../Cards/card'; 

const Gallery = () => {
  return (
    <div className="home_gallery">
      {logements.map((logement) => (
        <article key={logement.id}>
          <Link to={`/logement/${logement.id}`}>
            <Card image={logement.cover} title={logement.title} />
          </Link>
        </article>
      ))}
    </div>
  );
};

export default Gallery;