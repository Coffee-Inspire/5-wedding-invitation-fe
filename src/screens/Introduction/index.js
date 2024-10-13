import React from "react";
import { Row, Col, Carousel, Image } from "react-bootstrap";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

import Intro1 from "../../assets/photo/intro-1.webp";
import Intro2 from "../../assets/photo/intro-2.webp";
import Intro3 from "../../assets/photo/intro-3.webp";
import Intro4 from "../../assets/photo/intro-4.webp";
import Intro5 from "../../assets/photo/intro-5.webp";

import CountdownTimer from "../../components/CountdownTimer";

function Introduction(props) {
  const { show } = props;

  return (
    <div className="cst-intro-wrap text-center d-flex flex-column justify-content-center">
      <div className="cst-intro-sub-wrap position-relative">
        <Carousel fade controls={false} indicators={false}>
          <Carousel.Item>
            <Image src={Intro1} alt="" className="cst-intro-img-1" />
          </Carousel.Item>
          <Carousel.Item>
            <Image src={Intro2} alt="" className="cst-intro-img-2" />
          </Carousel.Item>
          <Carousel.Item>
            <Image src={Intro3} alt="" className="cst-intro-img-3" />
          </Carousel.Item>
          <Carousel.Item>
            <Image src={Intro4} alt="" className="cst-intro-img-4" />
          </Carousel.Item>
          <Carousel.Item>
            <Image src={Intro5} alt="" className="cst-intro-img-5" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="cst-intro-content d-flex flex-column justify-content-between">
        <div>
          <h5 className="cst-font-1">The Wedding of</h5>
          <h1 className="pt-3 display-3" style={{ letterSpacing: "5px" }}>
            Risal & Gaby
          </h1>
          <p>Saturday. 7 December 2024</p>
        </div>
        <div className="d-flex justify-content-center py-4">
          <CountdownTimer />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
