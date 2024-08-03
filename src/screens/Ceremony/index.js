import React from "react";
import { Row, Col } from "react-bootstrap";
// import "./index.scss";

import CountdownTimer from "../../components/CountdownTimer";
import ActivityInfoCard from "../../components/ActivityInfoCard";
import { takeIcon } from "../../data/iconMapper";
import timing from "../../helpers/timing";
import MusicBox from "../../components/MusicBox";

function Ceremony(props) {
  const { music } = props;
  const activityData = [
    {
      title: "CEREMONY",
      logo: takeIcon("ring"),
      date: "1 DEC",
      time: "16:00 PM",
      location1: "Lorem ipsum dolor sit amet consectetur 188,",
      location2: "adipiscing elit tempor incididunt",
      targetLink:
        "https://www.google.com/maps/place/IFGF+Semarang/@-6.9962337,110.4313532,17z/data=!3m1!4b1!4m5!3m4!1s0x2e708c98be88820b:0xc33ea87b220cbdc1!8m2!3d-6.9962337!4d110.4335419",
    },
    {
      title: "CELEBRATION",
      logo: takeIcon("wine"),
      date: "3 DEC",
      time: "18:00 PM",
      location1: "Lorem ipsum dolor sit amet consectetur 188,",
      location2: "adipiscing elit tempor incididunt",
      targetLink:
        "https://www.google.com/maps/place/IFGF+Semarang/@-6.9962337,110.4313532,17z/data=!3m1!4b1!4m5!3m4!1s0x2e708c98be88820b:0xc33ea87b220cbdc1!8m2!3d-6.9962337!4d110.4335419",
    },
  ];

  // const contentDisplay = () => {
  //   if (timing.afterCeremony())
  //     return <ActivityInfoCard props={activityData[1]} />;
  //   else return <ActivityInfoCard props={activityData[0]} />;
  // };

  return (
    <>
      <Row className="d-flex justify-content-center align-items-center py-4">
        <Col xs={12} className="text-center">
          <MusicBox music={music} />
        </Col>
        <Col xs={12} className="text-center py-4">
          <h1 className="cst-font-1 cst-color-2">You're invited!</h1>
        </Col>
        <Col xs={8} md={6} className="text-center py-4">
          <h5 className="">We want you to be a part of this special moment.</h5>
        </Col>
        <Col xs={10} md={7} className="p-0">
          <div className="d-flex justify-content-center py-4">
            <CountdownTimer />
          </div>
          {/* {contentDisplay()} */}
          <ActivityInfoCard props={activityData[0]} />
          <ActivityInfoCard props={activityData[1]} />
        </Col>
      </Row>
    </>

    // <div className="cst-cer-bg-photo">
    //   <Row className="m-0 d-flex justify-content-center align-items-center">
    //     <Col xs={10} md={7} className="p-0 cst-content-info-frame">
    //       <div className="d-flex justify-content-center pt-5">
    //         <CountdownTimer />
    //       </div>
    //       {contentDisplay()}
    //     </Col>
    //   </Row>
    // </div>
  );
}

export default Ceremony;
