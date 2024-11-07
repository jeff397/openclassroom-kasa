import React from "react";
import "./_banner.scss";

function banner({ imageSrc, bannerTitle }) {
  return (
    <div className="banner">
      <img src={imageSrc} alt="bannière" />
      <div className="banner_overlay"></div>
      <h1 className="banner_title">{bannerTitle}</h1>
    </div>
  );
}

export default banner;
