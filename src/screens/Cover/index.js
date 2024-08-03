import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "./index.scss";
import "animate.css/animate.min.css";

import PhotoCover from "../../assets/photos/cover.jpg";
import Button from "../../components/Button";
import { fadeIn } from "../../helpers/musicFadeInOut";

function Cover(props) {
  const { show, setShow, music } = props;

  const params = new URL(document.location).searchParams;
  const guest = params.get("guest");

  const closeCover = () => {
    setShow(false);
    document.body.style.overflow = "auto";
    fadeIn(music);
    music.play();
    music.loop = true;
    setTimeout(() => {
      document.querySelector("#cover").style.display = "none";
    }, 1200);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <div
      id="cover"
      className={
        (show ? "d-block" : "animate__animated animate__fadeOut") +
        " cst-cover-container"
      }
    >
      <img className="cst-cover-photo" src={PhotoCover} alt="" />
      <Row className="m-0 cst-cover-content">
        <Col xs={12} md={8} className="px-0 text-center">
          <h2 className="cst-cover-bridegroom cst-font-theme cst-color- m-4">
            DIANA {`&`} ROBERTO
          </h2>
          {guest && (
            <>
              <h5 className="cst-cover-dear">Kepada :</h5>
              <h4 className="cst-cover-guest my-4">{guest}</h4>
            </>
          )}
          <Button className="cst-btn-3 px-4 py-2" onClick={() => closeCover()}>
            Buka Undangan
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Cover;
