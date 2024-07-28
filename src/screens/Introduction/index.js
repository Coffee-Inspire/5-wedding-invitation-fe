import React from "react";
import { Row, Col } from "react-bootstrap";
// import "./index.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

// import PhotoGroom from "../../assets/photos/man.jpg";
// import PhotoBride from "../../assets/photos/female.jpg";

import Photo from "../../assets/photos2/1.jpg";

function Introduction(props) {
  const { show } = props;

  // const content = {
  //   groom: {
  //     name: "PETER JIMIE KUSUMA",
  //     head: "Putra Kedua Dari",
  //     parents: "Bapak dan Ibu Kornelius Samuji",
  //   },
  //   bridge: {
  //     name: "MEGA PISTIA LUMONDO",
  //     head: "Putri Pertama Dari",
  //     parents: "Bapak dan Ibu Johny Lumondo",
  //   },
  // };

  return (
    <>
      <Row className="vh-100">
        <Col xs={12} className="p-0 position-relative">
          <div className="cst-intro-photo-container position-relative">
            <img
              src={Photo}
              className="cst-intro-photo position-absolute"
              style={{ filter: "brightness(60%)" }}
              alt=""
            />
          </div>
          <div className="cst-intro-div text-white py-4">
            <h1 className="cst-font-3 cst-intro-title">We're Married</h1>
            <div className="d-flex justify-content-center">
              <h1 className="cst-font-4 cst-intro-text">DIANA</h1>
              <h1 className="cst-font-4 cst-intro-text cst-color-1 px-1">&</h1>
              <h1 className="cst-font-4 cst-intro-text">ROBERTO</h1>
            </div>
          </div>
        </Col>
      </Row>
    </>
    // <>
    //   <Row
    //     className={
    //       (!show && "animate__animated animate__fadeIn animate__delay-1s") +
    //       " mx-0 mb-3 cst-intro-row"
    //     }
    //   >
    //     <Col md={12} lg={5} className="px-0 d-flex align-items-center">
    //       <img
    //         src={PhotoGroom}
    //         className="cst-intro-photo-one animate__animated animate__bounce"
    //         alt=""
    //       />
    //     </Col>
    //     <Col
    //       md={12}
    //       lg={7}
    //       className="d-flex justify-content-center align-items-center"
    //     >
    //       <div className="cst-intro-name-card  ">
    //         <h1 className="py-3 cst-text-highlight-two cst-intro-text-spacing fw-normal">
    //           {content.groom.name}
    //         </h1>
    //         <p className="m-0 cst-letter-spacing-medium fw-bold">
    //           {content.groom.head}
    //         </p>
    //         <p className="m-0 cst-letter-spacing-medium">
    //           {" "}
    //           {content.groom.parents}
    //         </p>
    //       </div>
    //     </Col>
    //   </Row>

    //   <div className="cst-intro-and">
    //     <h1>{`&`}</h1>
    //   </div>

    //   <Row className="mx-0 mb-3 cst-intro-row">
    //     <Col
    //       md={12}
    //       lg={7}
    //       className="d-flex justify-content-center align-items-center"
    //     >
    //       <AnimationOnScroll
    //         animateIn="animate__fadeIn"
    //         animateOnce
    //         className="d-flex justify-content-center align-items-center w-100"
    //       >
    //         <div className="cst-intro-name-card">
    //           <h1 className="py-3 cst-text-highlight-two cst-intro-text-spacing fw-normal">
    //             {content.bridge.name}
    //           </h1>
    //           <p className="m-0 cst-letter-spacing-medium fw-bold">
    //             {content.bridge.head}
    //           </p>
    //           <p className="m-0 cst-letter-spacing-medium">
    //             {" "}
    //             {content.bridge.parents}
    //           </p>
    //         </div>
    //       </AnimationOnScroll>
    //     </Col>

    //     <Col
    //       md={12}
    //       lg={5}
    //       className="px-0 d-flex justify-content-end align-items-center"
    //     >
    //       <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
    //         <img src={PhotoBride} className="cst-intro-photo-two" alt="" />
    //       </AnimationOnScroll>
    //     </Col>
    //   </Row>
    // </>
  );
}

export default Introduction;
