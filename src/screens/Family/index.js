import React from "react";
import { Row, Col } from "react-bootstrap";
// import "./index.scss";

import CountdownTimer from "../../components/CountdownTimer";
import ActivityInfoCard from "../../components/ActivityInfoCard";
import timing from "../../helpers/timing";
import { takeIcon } from "../../data/iconMapper";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Family() {
  const activityData = {
    title: `God has led two lives<br>to take one path`,
    logo: "cross",
    category: "Formal",
    text1: "Risal Munadi",
    text2: "Youngest Son of<br> Mr. Ahmad Munawar & Mrs. Thio Siok Lan",
    text3: "Gabriela Ori Lumondo",
    text4: "Youngest Daughter of<br> Ps. Johny Lumondo & Mrs. Ompin Lamtioma",
    text5: "Together with our beloved parents invited you to our,",
  };

  return (
    <Row
      className="cst-bg-6 text-white text-center py-5"
      style={{ letterSpacing: "1px" }}
    >
      <span>{takeIcon("cross")}</span>
      <h5
        className="my-4"
        dangerouslySetInnerHTML={{ __html: activityData.title }}
      />
      <h3 className="my-3 cst-color-2" style={{ letterSpacing: "4px" }}>
        {activityData.text1}
      </h3>
      <Col xs={12}>
        <h5 dangerouslySetInnerHTML={{ __html: activityData.text2 }} />
      </Col>
      <span>
        <h2 className="my-4 cst-font-3">{"&"}</h2>
      </span>
      <h3 className="my-3 cst-color-2" style={{ letterSpacing: "4px" }}>
        {activityData.text3}
      </h3>
      <Col xs={12}>
        <h5 dangerouslySetInnerHTML={{ __html: activityData.text4 }} />
      </Col>
      <Col xs={12} className="mt-5">
        <h5>{activityData.text5}</h5>
      </Col>
    </Row>
  );
}

export default Family;
