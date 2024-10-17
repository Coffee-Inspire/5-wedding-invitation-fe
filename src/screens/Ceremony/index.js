import React, { useState } from "react";
import LazyLoad from "react-lazy-load";

import { takeIcon } from "../../data/iconMapper";
import Button from "../../components/Button";

function Ceremony(props) {
  const { currentUrl } = props;
  const [softRender, setSoftRender] = useState(false);

  return (
    <div className="cst-ceremony-wrap cst-bg-2 text-center py-5">
      <div className="cst-ceremony-title-wrap cst-color-1 d-flex align-items-center justify-content-center">
        {softRender && <div className="cst-title-bg-placeholder" />}
        <LazyLoad onContentVisible={() => setSoftRender(false)}>
          <div className="cst-ceremony-title-bg" />
        </LazyLoad>
        <div className="d-flex align-items-center justify-content-center">
          <div className="p-4 position-relative">
            <h1 className="display-3 py-1" style={{ letterSpacing: "5px" }}>
              Wedding
            </h1>
            <h1
              className="cst-font-1 position-absolute"
              style={{ bottom: "5%", right: "23%" }}
            >
              Date
            </h1>
          </div>
        </div>
      </div>
      <div style={{ padding: "150px 0 150px 0", letterSpacing: "1.5px" }}>
        <h2 className="py-4">
          Risal & Gaby
          <br />
          Holy Matrimony
        </h2>
        <p className="py-2">
          Saturday, 7<sup>th</sup> December 2024
          <br />
          11:00 WIB until Finish
        </p>
        {currentUrl !== "/gabycolleague" && (
          <div>
            <p className="py-2">
              IFGF Semarang,
              <br />
              Kompol Maksum 195, Semarang
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://maps.app.goo.gl/V5tXgLtvYyYbPPnU9"}
            >
              <Button>GOOGLE MAPS</Button>
            </a>
          </div>
        )}
        <div className="pt-5 mt-5">
          <h2>Live Streaming</h2>
          {/* <a target="_blank" rel="noreferrer" href={""}> */}
          <Button disabled>COMING SOON</Button>
          {/* </a> */}
        </div>
      </div>
    </div>
  );
}

export default Ceremony;
