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
      locationText:
        "Lorem ipsum dolor sit amet, consectus adispicing elit. Aliquas quis sodales metus",
      day: "minggu",
      month: "dec",
      date: "03",
      year: "2022",
      time: "09:00 - 11:00",
    },
    {
      title: "resepsi",
      buttonTitle: "google maps",
      locationText:
        "Lorem ipsum dolor sit amet, consectus adispicing elit. Aliquas quis sodales metus",
      day: "minggu",
      month: "dec",
      date: "05",
      year: "2022",
      time: "09:00 - 11:00",
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
        <Col xs={10} md={7} className="p-0 cst-cer-info-frame">
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
