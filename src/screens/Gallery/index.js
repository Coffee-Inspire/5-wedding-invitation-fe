import React, { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Row, Col } from "react-bootstrap";

import ImageModal from "../../components/ImageModal";
import galleryImages from "../../data/galleryImagesData";
import "animate.css/animate.min.css";
import "./index.scss";

function Gallery() {
  const [modalState, setModalState] = useState(false);
  const [initIndex, setInitIndex] = useState("");
  const openModal = (index) => {
    setInitIndex(index);
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
  };

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

  return (
    <div>
      {/* <h1 className="my-5 cst-gallery-title">OUR GALLERY</h1> */}
      <AnimationOnScroll animateIn="animate__slideInUp" animateOnce>
        <h3
          className="pt-5 pb-3 text-center fw-bold"
          style={{ letterSpacing: "5px" }}
        >
          OUR GALLERY
        </h3>
      </AnimationOnScroll>
      <Row className="mb-5 cst-gallery-canvas">
        {galleryImages.map((item, index) => (
          <Col
            key={item.indicate}
            xs={item.xs}
            md={item.md}
            // style={{ border: "1px solid red" }}
            className="px-1"
          >
            <AnimationOnScroll
              className="cst-gallery-header-frame mb-2"
              animateIn="animate__slideInLeft"
              animateOnce
            >
              <img
                onClick={() => openModal(index)}
                className={imageFocus(item.indicate)}
                src={item.image}
                alt=""
              />
            </AnimationOnScroll>
          </Col>
        ))}
      </Row>
      <ImageModal
        modalState={modalState}
        closeModal={closeModal}
        initIndex={initIndex}
        setInitIndex={setInitIndex}
      />
    </div>
  );
}

export default Gallery;
