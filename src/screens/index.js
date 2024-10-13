import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import PlayButton from "../components/PlayButton";
import Introduction from "./Introduction";
import Ceremony from "./Ceremony";
import Family from "./Family";
import Reservation from "./Reservation";
import Gallery from "./Gallery";
import Gift from "./Gift";
import Wish from "./Wish";
// import Streaming from "./Streaming";
import Closing from "./Closing";
import Footer from "../components/Footer";
import Cover from "./Cover";

import Song from "../assets/nathan-sykes-over-and-over-again-ft-ariana-grande.mp3";
import Bible from "./Bible";
// import check3Dec from "../helpers/changeData3Dec";
// import timing from "../helpers/timing";

function Screen() {
  const [show, setShow] = useState(true);
  const [music] = useState(new Audio(Song));

  const currentUrl = window.location.href;
  const url = new URL(currentUrl);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Container fluid className="p-0">
      <Cover show={show} setShow={setShow} music={music} />
      <Introduction show={show} />
      <Bible />
      <Family />
      <Ceremony currentUrl={url.pathname} />
      <Gallery />
      {url.pathname !== "/gabycolleague" && <Reservation />}
      {url.pathname !== "/invitation" && url.pathname !== "/gabycolleague" && (
        <Gift />
      )}
      <Wish />
      <Closing music={music} />
    </Container>
  );
}

export default Screen;
