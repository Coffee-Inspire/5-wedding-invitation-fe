import React from "react";
import { Row, Col } from "react-bootstrap";
import "./index.scss";

import Button from "../Button";

function CeremonyInfoCard({ props }) {
  const {
    title,
    buttonTitle,
    building,
    address,
    day,
    month,
    date,
    year,
    time,
    targetLink,
  } = props;

  return (
    <div className="d-flex justify-content-center align-items-center p-5 pt-3">
      <div className="text-center">
        <h4 className="cst-cer-title">{title}</h4>
        <Row className="mx-0 mt-5 mb-4 d-flex justify-content-center align-items-center cst-cer-date-row">
          <Col xs={3} md={2}>
            <p>{month}</p>
          </Col>
          <Col xs={5} md={2} className="cst-cer-day-col">
            <p>{day}</p>
            <h1 className="cst-text-highlight-one text-center">{date}</h1>
          </Col>
          <Col xs={3} md={2}>
            <p>{year}</p>
          </Col>
        </Row>
        <p className="my-4">{time}</p>
        <h5 className="my-2">Lokasi:</h5>
        <h2 className="m-2 fw-bold text-uppercase">{building}</h2>
        <h6 className="m-0 cst-text-thin">{address}</h6>
        <a target="_blank" rel="noreferrer" href={targetLink}>
          <Button className="mt-5">{buttonTitle}</Button>
        </a>
      </div>
    </div>
  );
}

export default CeremonyInfoCard;
