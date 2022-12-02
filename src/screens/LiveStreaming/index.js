import React from "react";
import { Row, Col } from "react-bootstrap";
import "./index.scss";

import timing from "../../helpers/timing";
import BannerOverlay from "../../components/BannerOverlay";
import Button from "../../components/Button";

// import check3Dec from "../../helpers/changeData3Dec";

function LiveStreaming() {
  const screenContent = {
    title: "LIVE STREAMING",
    text: "Kami juga berencana untuk mempublikasikan pernikahan kami secara virtual melalui zoom dan live instagram yang bisa anda ikuti melalui link berikut",
    buttonText: "join streaming",
  };

  //   const link = {
  //     resepsi: "https://www.google.com/",
  //     pemberkatan: "https://www.youtube.com/",
  //   };

  const openInNewTab = () => {
    const url = "https://ifgfsemarang.org/wedding";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="d-flex flex-column justify-content-center cst-live-bg-photo">
      <BannerOverlay className="text-center">
        <Row className="m-0 d-flex justify-content-center">
          <Col xs={10} md={5}>
            <h3 className="cst-live-title">{screenContent.title}</h3>
            <p>{screenContent.text}</p>
            {timing.afterEarlyBird() ? (
              <Button
                className="mt-5"
                onClick={() => {
                  //   if (check3Dec()) {
                  //     openInNewTab(link.resepsi);
                  //   } else {
                  //     openInNewTab(link.pemberkatan);
                  //   }
                  openInNewTab();
                }}
              >
                {screenContent.buttonText}
              </Button>
            ) : (
              <div className="text-center mt-5">
                <h5 className="p-3 d-flex flex-column cst-live-pending">
                  <span className="cst-live-pending-text-1 mb-1">
                    LINK COMING SOON
                  </span>
                  {/* <span className="cst-live-pending-text-2">
                    Link Coming Soon
                  </span> */}
                </h5>
              </div>
            )}
          </Col>
        </Row>
      </BannerOverlay>
    </div>
  );
}

export default LiveStreaming;
