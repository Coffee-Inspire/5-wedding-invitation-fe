import React from "react";
import { Row, Col } from "react-bootstrap";
import "./index.scss";

import CountdownTimer from "../../components/CountdownTimer";
import CeremonyInfoCard from "../../components/CeremonyInfoCard";
import timing from "../../helpers/timing";

function Ceremony() {
  const ceremonyData = [
    {
      title: "pemberkatan",
      buttonTitle: "google maps",
      building: "IFGF Semarang",
      address:
        "Jl. Kompol Maksum No.195, Peterongan, Kec. Semarang Sel., Kota Semarang, Jawa Tengah 50242",
      day: "sabtu",
      month: "dec",
      date: "03",
      year: "2022",
      time: "11:00 WIB - Selesai",
      targetLink:
        "https://www.google.com/maps/place/IFGF+Semarang/@-6.9962337,110.4313532,17z/data=!3m1!4b1!4m5!3m4!1s0x2e708c98be88820b:0xc33ea87b220cbdc1!8m2!3d-6.9962337!4d110.4335419",
    },
    {
      title: "resepsi",
      buttonTitle: "google maps",
      building: "IFGF Semarang",
      address:
        "Jl. Kompol Maksum No.195, Peterongan, Kec. Semarang Sel., Kota Semarang, Jawa Tengah 50242",
      day: "sabtu",
      month: "dec",
      date: "05",
      year: "2022",
      time: "11:00 WIB - Selesai",
      targetLink:
        "https://www.google.com/maps/place/IFGF+Semarang/@-6.9962337,110.4313532,17z/data=!3m1!4b1!4m5!3m4!1s0x2e708c98be88820b:0xc33ea87b220cbdc1!8m2!3d-6.9962337!4d110.4335419",
    },
  ];

  const contentDisplay = () => {
    if (timing.afterCeremony())
      return <CeremonyInfoCard props={ceremonyData[1]} />;
    else return <CeremonyInfoCard props={ceremonyData[0]} />;
  };

  return (
    <div className="cst-cer-bg-photo">
      <Row className="m-0 d-flex justify-content-center align-items-center">
        <Col xs={10} md={7} className="p-0 cst-content-info-frame">
          <div className="d-flex justify-content-center pt-5">
            <CountdownTimer />
          </div>
          {contentDisplay()}
        </Col>
      </Row>
    </div>
  );
}

export default Ceremony;
