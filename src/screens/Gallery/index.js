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

  return (
    <div>
      <h1 className="my-5 cst-gallery-title">OUR GALLERY</h1>
      <Row className="mb-5 cst-gallery-canvas">
        {galleryImages.map((item, index) => (
          <Col key={item.image} md={item.wide}>
            <AnimationOnScroll
              className="cst-gallery-header-frame"
              animateIn="animate__zoomIn"
              animateOnce
            >
              <img
                onClick={() => openModal(index)}
                className="cst-gallery-photo"
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
