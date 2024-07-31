import React from "react";
import { Row, Col } from "react-bootstrap";
// import "./index.scss";

import CountdownTimer from "../../components/CountdownTimer";
import ActivityInfoCard from "../../components/ActivityInfoCard";
import timing from "../../helpers/timing";
import { takeIcon } from "../../data/iconMapper";
import { AnimationOnScroll } from "react-animation-on-scroll";
import QR from "../../assets/images/qr-sample.png";

function Gift() {
  const activityData = {
    title: "GIFT",
    text: "Lorem ipsum set de amet vipsum set de amet ipsum set de amet ipsum set de amet ipsum set de amet ipsum set de amet",
  };

  return (
    <div className="text-center my-4 py-4">
      <AnimationOnScroll
        animateIn="animate__zoomIn"
        className="pb-3"
        animateOnce
      >
        <span>{takeIcon("gift")}</span>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__slideInUp" animateOnce>
        <h3 className="fw-bold" style={{ letterSpacing: "5px" }}>
          {activityData.title}
        </h3>
      </AnimationOnScroll>
      <Row className="d-flex justify-content-center">
        <Col xs={10} md={7}>
          <h5 className="text-center py-3">{activityData.text}</h5>
        </Col>
      </Row>
      <div className="pt-3 pb-5">
        <img className="cst-qr" src={QR} alt="" />
      </div>

      {/* <Row className="d-flex justify-content-center py-4">
        <Col xs={9} md={12} className="">
          <h5 className="">{location1}</h5>
        </Col>
        <Col xs={9} md={12}>
          <h5>{location2}</h5>
        </Col>
      </Row> */}
    </div>

    // <div className="cst-cer-bg-photo">
    //   <Row className="m-0 d-flex justify-content-center align-items-center">
    //     <Col xs={10} md={7} className="p-0 cst-content-info-frame">
    //       <div className="d-flex justify-content-center pt-5">
    //         <CountdownTimer />
    //       </div>
    //       {contentDisplay()}
    //     </Col>
    //   </Row>
    // </div>
  );
}

export default Gift;
