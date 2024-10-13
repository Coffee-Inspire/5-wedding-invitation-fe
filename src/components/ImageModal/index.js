import React from "react";
import { Modal, Carousel } from "react-bootstrap";
import "./index.scss";

function ImageModal({
  modalState,
  closeModal,
  initIndex,
  setInitIndex,
  listImage = [],
}) {
  return (
    <Modal
      centered
      interval={0}
      // size="lg"
      show={modalState}
      onHide={closeModal}
      className="cst-modal"
      dialogClassName="cst-modal-width"
    >
      <Modal.Header
        closeButton
        // closeVariant="white"
        className="border-0"
      ></Modal.Header>

      <Modal.Body>
        <Carousel activeIndex={initIndex} onSelect={(e) => setInitIndex(e)}>
          {listImage.map((item) => (
            <Carousel.Item key={item.image}>
              <img src={item.image} alt="" className="cst-modal-item-image" />
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
    </Modal>
  );
}

export default ImageModal;
