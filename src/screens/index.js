import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import PlayButton from "../components/PlayButton";
import Introduction from "./Introduction";
// import FamilyBackup from "./FamilyBackup";
import Ceremony from "./Ceremony";
import Family from "./Family";
import BibleQuote from "./BibleQuote";
import LiveStreaming from "./LiveStreaming";
import ReservationBackup from "./ReservationBackup";
import Reservation from "./Reservation";
import Gallery from "./Gallery";
import GiftBackup from "./GiftBackup";
import Gift from "./Gift";
import Wishes from "./Wishes";
import EndCover from "./EndCover";
import Footer from "../components/Footer";
import Cover from "./Cover";

import Song from "../assets/i-was-made-for-loving-you.mp3";
import DressCode from "./DressCode";
// import check3Dec from "../helpers/changeData3Dec";
// import timing from "../helpers/timing";

function Index() {
  const [show, setShow] = useState(true);
  // const [music] = useState(new Audio(Song));

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Container fluid className="">
      {/* <Cover show={show} setShow={setShow} music={music} /> */}
      {/* {!show && <PlayButton music={music} />} */}
      <Introduction show={show} />
      {/* <FamilyBackup /> */}
      <Ceremony />
      <DressCode />
      {/* <BibleQuote /> */}
      {/* <LiveStreaming /> */}
      {/* <Family />1 */}
      <Gallery />
      <Gift />
      <Reservation />

      {/* {timing.afterCeremony() && <Gift />} */}

      {/* <Wishes /> */}
      {/* <EndCover /> */}
      {/* <Footer /> */}
    </Container>
  );
}

export default Index;
