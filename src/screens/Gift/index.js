import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "../../components/Button";

function Gift() {
  const activityData = {
    title: "GIFT",
    text: "Your greetings and presence are the best gifts for us, but if you would like to give more, please click the button below",
  };

  const [show, setShow] = useState(false);
  const [clickedCopy, setClickedCopy] = useState(false);

  const handleClickCopy = () => {
    const textToCopy = "8545609831";
    try {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          setClickedCopy(true);
        })
        .catch((err) => {
          console.error("Clipboard access denied:", err);
          fallbackCopy(textToCopy);
        });
    } catch (asd) {
      fallbackCopy(textToCopy);
    }
  };

  const fallbackCopy = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();

    try {
      document.execCommand("copy");
      setClickedCopy(true);
    } catch (err) {
      console.error("Fallback: Failed to copy", err);
    }

    document.body.removeChild(textArea);
  };

  useEffect(() => {
    if (clickedCopy) {
      setTimeout(() => {
        setClickedCopy(false);
      }, 800);
    }
  }, [clickedCopy]);

  return (
    <div className="cst-ceremony-wrap cst-bg-2 text-center py-5">
      <div className="cst-gift-title-wrap cst-color-1 d-flex align-items-center justify-content-center">
        <div className="cst-gift-title-bg" />
        <div className="d-flex align-items-center justify-content-center">
          <div className="p-4 position-relative">
            <h1 className="display-3 py-1" style={{ letterSpacing: "5px" }}>
              Wedding
            </h1>
            <h1
              className="cst-font-1 position-absolute"
              style={{ bottom: "8%", right: "0%" }}
            >
              Gift
            </h1>
          </div>
        </div>
      </div>
      <div style={{ padding: "150px 0 150px 0", letterSpacing: "1.5px" }}>
        <p className="text-center py-3 px-4">{activityData.text}</p>
        <Button className="py-2" onClick={() => setShow(true)}>
          SEND WEDDING GIFT
        </Button>
      </div>

      <Modal centered show={show} onHide={() => setShow(false)}>
        <Modal.Body className="bg-white py-4">
          <div
            className="cst-color-3 pb-5 d-flex align-items-center justify-content-center position-relative"
            style={{ overflow: "hidden" }}
          >
            <div className="d-flex align-items-center justify-content-center">
              <div className="p-4 position-relative">
                <h3 className="display-6 py-1" style={{ letterSpacing: "5px" }}>
                  Wedding
                </h3>
                <h3
                  className="cst-font-1 position-absolute"
                  style={{ bottom: "8%", right: "5%" }}
                >
                  Gift
                </h3>
              </div>
            </div>
          </div>

          <div className="py-2 text-center">
            <h6>Risal Munadi</h6>
            <h6 className="text-truncate">Bank BCA - 8545 6098 31</h6>
            <Button className="py-2 px-5" onClick={() => handleClickCopy()}>
              {clickedCopy ? (
                <small>COPY SUCCESSFUL</small>
              ) : (
                <small>COPY ACCOUNT NUMBER</small>
              )}
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Gift;
