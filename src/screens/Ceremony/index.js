import React from "react";

import { takeIcon } from "../../data/iconMapper";
import Button from "../../components/Button";

function Ceremony(props) {
  const { currentUrl } = props;
  const activityData = [
    {
      title: "CEREMONY",
      logo: takeIcon("ring"),
      date: "1 DEC",
      time: "16:00 PM",
      location1: "Lorem ipsum dolor sit amet consectetur 188,",
      location2: "adipiscing elit tempor incididunt",
      targetLink:
        "https://www.google.com/maps/place/IFGF+Semarang/@-6.9962337,110.4313532,17z/data=!3m1!4b1!4m5!3m4!1s0x2e708c98be88820b:0xc33ea87b220cbdc1!8m2!3d-6.9962337!4d110.4335419",
    },
    {
      title: "HOLY MATRIMONY",
      logo: takeIcon("wine"),
      date: "7 DEC 2024",
      time: "11:00 AM (WIB)",
      location1: "IFGF Semarang",
      location2: "Kompol Maksum 195, Semarang",
      targetLink: "https://maps.app.goo.gl/V5tXgLtvYyYbPPnU9",
    },
  ];

  return (
    <div className="cst-ceremony-wrap cst-bg-2 text-center py-5">
      <div className="cst-ceremony-title-wrap cst-color-1 d-flex align-items-center justify-content-center">
        <div className="cst-ceremony-title-bg" />
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
          Saturday, 7th December 2024
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
