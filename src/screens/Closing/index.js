import React from "react";
import { Row, Col } from "react-bootstrap";

function Closing() {
  const activityData = {
    title: "With Love and Joy",
    signature: "Risal y Gaby",
    text: "We would delighted to have you with us to share and celebrate this special day",
  };

  return (
    <div className="text-center" style={{ padding: "50px 0 100px 0" }}>
      <Row className="d-flex justify-content-center text-center">
        <Col xs={12} md={12} className="pt-4 pb-3">
          <h1 className="cst-closing-title cst-color-4">
            <span className="cst-font-3">With </span>
            <span className="cst-font-3 cst-color-1">Love </span>
            <span className="cst-font-3">and </span>
            <span className="cst-font-3 cst-color-1">Joy </span>
          </h1>
        </Col>
        <Col xs={10} md={12} className="pb-4">
          <h1 className="cst-color-2 cst-font-5 cst-closing-signature">
            {activityData.signature}
          </h1>
        </Col>
        <Col xs={10} md={6} className="py-4">
          <h5 className="cst-color-2" style={{ letterSpacing: "0.8px" }}>
            {activityData.text}
          </h5>
        </Col>
      </Row>
      <div className="px-4"></div>
    </div>
  );
}

export default Closing;
