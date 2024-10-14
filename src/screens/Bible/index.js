import React from "react";
import { Row, Col } from "react-bootstrap";

function Bible() {
  const activityData = {
    title: "Yosua 24:15b",
    text: "but as for me and my house, we will server the LORD.",
  };

  return (
    <div
      className="cst-bg-1 text-center"
      style={{ padding: "100px 0 100px 0" }}
    >
      <h3 className="cst-font-1" style={{ letterSpacing: "5px" }}>
        {activityData.title}
      </h3>
      <Row className="g-0 d-flex justify-content-center py-4">
        <Col xs={12} className="d-flex justify-content-center">
          <span
            style={{
              display: "block",
              height: "40px",
              borderLeft: "2px solid #303031", // Adjust color and width as needed
              margin: "0 20px", // Space between the line and the text
              opacity: "0.3",
            }}
          />
        </Col>
        <Col md={7} xs={9} className="py-4">
          <p>
            {'"'}
            {activityData.text}
            {'"'}
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Bible;
