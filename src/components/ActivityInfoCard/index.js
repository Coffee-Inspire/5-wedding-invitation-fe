import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { AnimationOnScroll } from "react-animation-on-scroll";
// import "./index.scss";

// import Button from "../Button";

function ActivityInfoCard({ props }) {
  // const {
  //   title,
  //   buttonTitle,
  //   building,
  //   address,
  //   day,
  //   month,
  //   date,
  //   year,
  //   time,
  //   targetLink,
  // } = props;

  const { title, logo, date, time, location1, location2, targetLink } = props;

  return (
    <div className="text-center" style={{ padding: "60px 0 60px 0" }}>
      <AnimationOnScroll
        animateIn="animate__zoomIn"
        animateOnce
        className="pb-3"
      >
        <span>{logo}</span>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__slideInUp" animateOnce>
        <h3 className="fw-bold" style={{ letterSpacing: "5px" }}>
          {title}
        </h3>
      </AnimationOnScroll>
      <Row className="py-4">
        <Col
          xs={6}
          md={6}
          className="py-3"
          // style={{ boxShadow: "3px 0px 0px 0px #584619" }}
          style={{ borderRight: "3px solid #584619" }}
        >
          <h3 className="cst-color-2">{date}</h3>
        </Col>
        <Col xs={6} md={6} className="py-3">
          <h3 className="cst-color-2">{time}</h3>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center py-4">
        <Col xs={9} md={12} className="">
          <h5 className="">{location1}</h5>
        </Col>
        <Col xs={9} md={12}>
          <h5>{location2}</h5>
        </Col>
      </Row>
      <a target="_blank" rel="noreferrer" href={targetLink}>
        <Button type="submit" variant="none" className="cst-btn-1 py-1 px-5">
          GOOGLE MAPS
        </Button>
        {/* <Button>GOOGLE MAPS</Button> */}
      </a>
      {/* <p className="my-4">{time}</p>
      <h5 className="my-2">Lokasi:</h5>
      <h2 className="m-2 fw-bold text-uppercase">{building}</h2>
      <h6 className="m-0 cst-text-thin">{address}</h6>
      <a target="_blank" rel="noreferrer" href={targetLink}>
        <Button className="mt-5">{buttonTitle}</Button>
      </a> */}
    </div>
    // <div className="d-flex justify-content-center align-items-center p-5 pt-3">
    //   <div className="text-center">
    //     <h4 className="cst-cer-title">{title}</h4>
    //     <Row className="mx-0 mt-5 mb-4 d-flex justify-content-center align-items-center cst-cer-date-row">
    //       <Col xs={3} md={2}>
    //         <p>{month}</p>
    //       </Col>
    //       <Col xs={5} md={2} className="cst-cer-day-col">
    //         <p>{day}</p>
    //         <h1 className="cst-text-highlight-one text-center">{date}</h1>
    //       </Col>
    //       <Col xs={3} md={2}>
    //         <p>{year}</p>
    //       </Col>
    //     </Row>
    //     <p className="my-4">{time}</p>
    //     <h5 className="my-2">Lokasi:</h5>
    //     <h2 className="m-2 fw-bold text-uppercase">{building}</h2>
    //     <h6 className="m-0 cst-text-thin">{address}</h6>
    //     <a target="_blank" rel="noreferrer" href={targetLink}>
    //       <Button className="mt-5">{buttonTitle}</Button>
    //     </a>
    //   </div>
    // </div>
  );
}

export default ActivityInfoCard;
