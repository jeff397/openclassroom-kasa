import React from "react";
import { useParams } from "react-router-dom";
import slideLogement from "../../Listing/logements.json";
import Slideshow from "../../components/Slideshow/Slideshow";

function Housing() {
  const { id } = useParams();
  const housingData = slideLogement.find((slide) => slide.id === id);

  return (
    <main>
      {housingData ? (
        <div>
          <Slideshow slides={housingData.pictures} />
          <div className="slideshow-container">
            <div className="slideshow-presentation">
              <h1 className="slideshow-title">{housingData.title}</h1>
              <p className="slideshow-location">{housingData.location}</p>
            </div>
            <div className="slideshow-host">
              <h2 className="slideshow-name">{housingData.host.name} </h2>
              <img src={housingData.host.picture} alt="host" />
            </div>
          </div>
        </div>
      ) : (
        <p>Logement introuvable</p>
      )}
    </main>
  );
}

export default Housing;
