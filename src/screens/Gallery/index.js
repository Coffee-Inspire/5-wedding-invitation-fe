import React, { useState } from "react";
import Slider from "react-slick";
import ImageModal from "../../components/ImageModal";
import "animate.css/animate.min.css";

import One from "../../assets/photo/gallery/1.webp";
import Two from "../../assets/photo/gallery/2.webp";
import Three from "../../assets/photo/gallery/3.webp";
import Four from "../../assets/photo/gallery/4.webp";
import Five from "../../assets/photo/gallery/5.webp";
import Six from "../../assets/photo/gallery/6.webp";
import Seven from "../../assets/photo/gallery/7.webp";
import Eight from "../../assets/photo/gallery/8.webp";
import Nine from "../../assets/photo/gallery/9.webp";
import Ten from "../../assets/photo/gallery/10.webp";
import Eleven from "../../assets/photo/gallery/11.webp";
import Twelve from "../../assets/photo/gallery/12.webp";
import Thirteen from "../../assets/photo/gallery/13.webp";
import Fourteen from "../../assets/photo/gallery/14.webp";
import Fifteen from "../../assets/photo/gallery/15.webp";
import Sixteen from "../../assets/photo/gallery/16.webp";
import Seventeen from "../../assets/photo/gallery/17.webp";
import Eighteen from "../../assets/photo/gallery/18.webp";
import Nineteen from "../../assets/photo/gallery/19.webp";
import { Row, Col } from "react-bootstrap";

function Gallery() {
  const [modalState, setModalState] = useState(false);
  const [initIndex, setInitIndex] = useState("");
  const [initListImages, setInitListImages] = useState([]);
  const openModal = (index, whole) => {
    setInitIndex(index);
    setInitListImages(whole);
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
  };

  const sliderImages1 = [
    {
      image: One,
      highlight: "cst-gallery-image-crop-center",
    },
    {
      image: Two,
      highlight: "cst-gallery-image-crop-left-large",
    },
    {
      image: Three,
      highlight: "cst-gallery-image-crop-center",
    },
    {
      image: Four,
      highlight: "cst-gallery-image-crop-center",
    },
    {
      image: Five,
      highlight: "cst-gallery-image-crop-center",
    },
    {
      image: Six,
      highlight: "cst-gallery-image-crop-left-medium",
    },
  ];

  const sliderImages2 = [
    {
      image: Seven,
      highlight: "cst-gallery-image-crop-center",
    },
    {
      image: Eight,
      highlight: "cst-gallery-image-crop-left-medium-plus",
    },
    {
      image: Nine,
      highlight: "cst-gallery-image-crop-left-medium",
    },
    {
      image: Ten,
      highlight: "cst-gallery-image-crop-right-large",
    },
    {
      image: Eleven,
      highlight: "cst-gallery-image-crop-right-medium-plus",
    },
    {
      image: Twelve,
      highlight: "cst-gallery-image-crop-left-medium-plus-2",
    },
    {
      image: Sixteen,
      highlight: "cst-gallery-image-crop-right-large",
    },
  ];

  const imageFocus = (indicator) => {
    const classMapper = {
      one: "cst-gallery-image-crop-right-medium",
      five: "cst-gallery-image-crop-right-large",
      nine: "cst-gallery-image-crop-left-medium",
      ten: "cst-gallery-image-crop-left-large",
      eleven: "cst-gallery-image-crop-right-bottom-small",
      default: "",
    };
    return `${
      classMapper[indicator] || classMapper["default"]
    } cst-gallery-photo`;
  };

  const rsOptions = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
  };

  return (
    <div className="cst-bg-1 px-1" style={{ padding: "50px 0 50px 0" }}>
      <div className="py-5">
        <div className="p-4 position-relative text-center">
          <h2 className="display-4 py-" style={{ letterSpacing: "5px" }}>
            Gallery
          </h2>
          <h2
            className="cst-font-1 position-absolute"
            style={{
              bottom: "0%",
              left: "50%",
              transform: "translate(-20%, -10%)",
            }}
          >
            Photos
          </h2>
        </div>
      </div>
      <div className="cst-gallery-canvas">
        <div className="cst-gallety-slider-canvas w-100">
          <Slider {...rsOptions} className="mx-1">
            {sliderImages1.map((item, index, whole) => {
              return (
                <div key={index} className="px-2">
                  <div className="cst-gallery-img-frame">
                    <img
                      onClick={() => openModal(index, whole)}
                      className={`cst-gallery-img ${item.highlight}`}
                      src={item.image}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        <div className="cst-gallery-img-frame-2 px-2 py-2">
          <img
            className="cst-gallery-img cst-gallery-image-crop-top-large"
            src={Thirteen}
            alt=""
          />
        </div>
        <div className="cst-gallery-img-frame-2 px-2 py-2">
          <img
            className="cst-gallery-img cst-gallery-image-crop-top-large"
            src={Fourteen}
            alt=""
          />
        </div>
        <div className="cst-gallery-img-frame-2 px-2 py-2">
          <img className="cst-gallery-img" src={Fifteen} alt="" />
        </div>
        <Slider {...rsOptions} className="mx-1">
          {sliderImages2.map((item, index, whole) => {
            return (
              <div key={index} className="px-2">
                <div className="cst-gallery-img-frame">
                  <img
                    onClick={() => openModal(index, whole)}
                    className={`cst-gallery-img ${item.highlight}`}
                    src={item.image}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </Slider>
        <Row className="px-3">
          <Col md={6} xs={12} className="px-0">
            <div className="cst-gallery-img-frame-2 px-2 py-2">
              <img
                className="cst-gallery-img cst-gallery-image-crop-left-medium"
                src={Seventeen}
                alt=""
              />
            </div>
          </Col>
          <Col md={6} xs={12} className="px-0">
            <div className="cst-gallery-img-frame-2 px-2 py-2">
              <img className="cst-gallery-img" src={Nineteen} alt="" />
            </div>
          </Col>
        </Row>
        <div className="cst-gallery-img-frame-2 px-2 py-2">
          <img
            className="cst-gallery-img cst-gallery-image-crop-top-medium"
            src={Eighteen}
            alt=""
          />
        </div>
      </div>
      <ImageModal
        modalState={modalState}
        closeModal={closeModal}
        initIndex={initIndex}
        setInitIndex={setInitIndex}
        listImage={initListImages}
      />
    </div>
  );
}

export default Gallery;
