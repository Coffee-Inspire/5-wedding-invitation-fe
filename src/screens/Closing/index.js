import React, { useState } from "react";
import MusicBox from "../../components/MusicBox";
import Logo from "../../assets/images/logo.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LazyLoad from "react-lazy-load";

function Closing({ music }) {
  const activityData = {
    title: "With Love and Joy",
    signature: "Risal & Gaby",
    text: "We would delighted to have you with us to share and celebrate this special day",
  };

  const [softRender, setSoftRender] = useState(false);

  return (
    <div className="cst-closing-wrap text-center d-flex flex-column justify-content-center position-relative">
      {softRender && <div className="cst-title-bg-placeholder" />}
      <LazyLoad onContentVisible={() => setSoftRender(false)}>
        <div className="cst-closing-bg" />
      </LazyLoad>
      <div className="text-center">
        <LazyLoadImage
          effect="blur"
          alt={""}
          height="180px"
          src={Logo}
          width="180px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <h3 className="py-2">{activityData.title}</h3>
      <h5 className="cst-font-1 py-3">{activityData.signature}</h5>
      <p className="py-3">{activityData.text}</p>
      <MusicBox music={music} />
      <small
        className="py-3 text-center"
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        Copyright @2024 Le Debute Team
      </small>
    </div>
  );
}

export default Closing;
