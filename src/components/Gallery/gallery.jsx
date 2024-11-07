import React from "react";
import { Link } from "react-router-dom";
import housing from "../../Listing/logements.json";
import Card from "../Cards/card";
import "./_gallery.scss";

const Gallery = () => {
  return (
    <section className="home_gallery">
      {housing.map((housing) => (
        <article key={housing.id}>
          <Link to={`/Housing/${housing.id}`}>
            <Card image={housing.cover} title={housing.title} />
          </Link>
        </article>
      ))}
    </section>
  );
};

export default Gallery;
