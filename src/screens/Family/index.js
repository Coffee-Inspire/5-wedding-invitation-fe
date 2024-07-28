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
    title: "DRESSCODE",
    logo: null,
    category: "Formal",
    text1: "no specification",
  };

  return (
    <Row className="cst-bg-2 text-white">
      <Col className="p-0">Yang Berbahagia</Col>
    </Row>
    // <div className="text-center my-4 bg-danger">
    //   <AnimationOnScroll animateIn="animate__zoomIn" animateOnce>
    //     <span>{takeIcon("dresscode")}</span>
    //   </AnimationOnScroll>
    //   <AnimationOnScroll animateIn="animate__slideInUp" animateOnce>
    //     <h3 className="fw-bold" style={{ letterSpacing: "5px" }}>
    //       {activityData.title}
    //     </h3>
    //   </AnimationOnScroll>
    //   <h5 className="text-center py-3">{activityData.category}</h5>
    //   {/* <Row className="d-flex justify-content-center py-4">
    //     <Col xs={9} md={12} className="">
    //       <h5 className="">{location1}</h5>
    //     </Col>
    //     <Col xs={9} md={12}>
    //       <h5>{location2}</h5>
    //     </Col>
    //   </Row> */}
    // </div>

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

export default Family;
