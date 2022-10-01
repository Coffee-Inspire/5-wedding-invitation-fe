import React from "react";
import { Row, Col } from "react-bootstrap";
import "./index.scss";

function Family() {
  const groomFamily = {
    title: "Keluarga Peter",
    nameList: [
      "Ps. Kornelius Samuji, M.A., M.Th.",
      "Dr. Florentina Wijayani Kusumawati, M.Th., M.Pd",
    ],
  };
  const brideFamily = {
    title: "Keluarga Mega",
    nameList: ["Ps. Johny Lumondo, S.Th", "Ompin Lamtioma Desmeria"],
  };
  return (
    <div className="cst-family-container">
      <Row className="mx-0 d-flex justify-content-center align-items-center h-100">
        <Col
          xs={11}
          md={7}
          className="cst-content-info-frame cst-family-content pb-5"
        >
          <Row className="d-flex justify-content-center cst-aaa">
            <Col xs={12} className="">
              <h5 className="text-center cst-family-title cst-text-highlight-one cst-font-theme my-5">
                Yang Berbahagia
              </h5>
            </Col>
            <Col
              xs={6}
              md={3}
              className="px-4 px-md-5 cst-family-list-wrap text-center"
            >
              <h5 className="cst-family-header">{groomFamily.title}</h5>
              {groomFamily.nameList.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </Col>
            <Col
              xs={6}
              md={3}
              className="px-4 px-md-5 cst-family-list-wrap text-center"
            >
              <h5 className="cst-family-header">{brideFamily.title}</h5>
              {brideFamily.nameList.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Family;
