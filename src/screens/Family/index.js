import React from "react";
import { Row, Col, Image } from "react-bootstrap";
// import "./index.scss";

import CountdownTimer from "../../components/CountdownTimer";
import ActivityInfoCard from "../../components/ActivityInfoCard";
import timing from "../../helpers/timing";
import { takeIcon } from "../../data/iconMapper";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Button from "../../components/Button";

import ImgGentleman from "../../assets/photo/family-1.webp";
import ImgWoman from "../../assets/photo/family-2.webp";
import Divider from "../../assets/images/divider.png";

function Family() {
  const activityData = {
    title: `God has led two lives<br>to take one path`,
    logo: "cross",
    category: "Formal",
    text1: "Risal Munadi",
    text2: "Youngest Son of",
    text3: "✟ Mr. Ahmad Munawar & Mrs. Thio Siok Lan",
    text4: "Gabriela Ori Lumondo",
    text5: "Youngest Daughter of",
    text6: "Ps. Johny Lumondo & Mrs. Ompin Lamtioma",
    text7: "Together with our beloved parents invited you to our,",
  };

  return (
    <div className="cst-bg-2 py-4">
      <Row className="g-0 d-flex justify-content-center">
        <Col
          md={5}
          xs={12}
          className="d-flex flex-column justify-content-center"
        >
          <Row className="bg-success2 g-0">
            <Col
              xs={6}
              className="d-flex justify-content-end cst-family-img-col-1"
            >
              <div className="cst-family-img-frame-1">
                <Image src={ImgGentleman} className="cst-family-img-1" alt="" />
              </div>
            </Col>
            <Col xs={6} className="cst-family-img-col-2">
              <div className="cst-family-img-frame-2">
                <Image src={ImgWoman} className="cst-family-img-2" alt="" />
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={5} xs={12}>
          <div className="text-center py-5">
            <h3 className="cst-font-1 py-3">Risal Munadi</h3>
            {/* <h2 className="py-2" style={{ letterSpacing: "3px" }}>
              {activityData.text1}
            </h2> */}
            <div className="py-2">
              <h6>{activityData.text2}</h6>
              <h6>{activityData.text3}</h6>
            </div>
            {/* <Button>risalmunadi</Button> */}
          </div>
          <div className="mx-5 py-2">
            <img
              src={Divider}
              alt=""
              className="w-100"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="text-center py-5">
            <h3 className="cst-font-1 py-3">Gabriela Ori Lumondo</h3>
            {/* <h2 className="py-2" style={{ letterSpacing: "3px" }}>
              {activityData.text4}
            </h2> */}
            <div className="py-2">
              <h6>{activityData.text5}</h6>
              <h6>{activityData.text6}</h6>
            </div>
            {/* <Button>gaby</Button> */}
          </div>
        </Col>
      </Row>
    </div>
    // <Row
    //   className="cst-bg-6 text-white text-center py-5"
    //   style={{ letterSpacing: "1px" }}
    // >
    //   <span>{takeIcon("cross")}</span>
    //   <h5
    //     className="my-4"
    //     dangerouslySetInnerHTML={{ __html: activityData.title }}
    //   />
    //   <h3 className="my-3 cst-color-2" style={{ letterSpacing: "4px" }}>
    //     {activityData.text1}
    //   </h3>
    //   <Col xs={12}>
    //     <h5 dangerouslySetInnerHTML={{ __html: activityData.text2 }} />
    //   </Col>
    //   <span>
    //     <h2 className="my-4 cst-font-3">{"&"}</h2>
    //   </span>
    //   <h3 className="my-3 cst-color-2" style={{ letterSpacing: "4px" }}>
    //     {activityData.text3}
    //   </h3>
    //   <Col xs={12}>
    //     <h5 dangerouslySetInnerHTML={{ __html: activityData.text4 }} />
    //   </Col>
    //   <Col xs={12} className="mt-5">
    //     <h5>{activityData.text5}</h5>
    //   </Col>
    // </Row>
  );
}

export default Family;
