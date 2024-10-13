import React, { useState, useEffect } from "react";
import moment from "moment";
import { Row, Col } from "react-bootstrap";

import timing from "../../helpers/timing";
// import "./index.scss";

function CountdownTimer() {
  const deadline = moment(timing.ceremonyDeadline);
  const [yearLeft, setYearLeft] = useState("0");
  const [monthLeft, setMonthLeft] = useState("0");
  const [dayLeft, setDayLeft] = useState("0");
  const [hourLeft, setHourLeft] = useState("0");
  const [minuteLeft, setMinuteLeft] = useState("0");
  const [secondLeft, setSecondLeft] = useState("0");

  const checkStopTicking = {
    month: () => {
      return yearLeft === 0 && monthLeft === 0;
    },
    day: () => {
      return monthLeft === 0 && dayLeft === 0;
    },
    hour: () => {
      return dayLeft === 0 && hourLeft === 0;
    },
    minute: () => {
      return hourLeft === 0 && minuteLeft === 0;
    },
    second: () => {
      return minuteLeft === 0 && secondLeft === 0;
    },
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = moment();
      const parseToSecond = deadline.diff(currentDate, "seconds");
      const timelapse = moment.duration(parseToSecond, "seconds");
      const data = timelapse._data;
      const max = (param) => Math.max(0, param);
      setYearLeft(max(data.years));
      setMonthLeft(max(data.months));
      setDayLeft(max(data.days));
      setHourLeft(max(data.hours));
      setMinuteLeft(max(data.minutes));
      setSecondLeft(max(data.seconds));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [deadline]);

  return (
    <Row className="d-flex justify-content-center cst-countdown-row">
      <Col
        xs={2}
        md={2}
        lg={2}
        className={`${
          checkStopTicking.month() ? "cst-countdown-col-out " : ""
        }py-2 px-4 cst-countdown-col`}
      >
        <h1 className="display-4">{monthLeft}</h1>
        <small className="">Month</small>
      </Col>
      <Col
        xs={2}
        md={2}
        lg={2}
        className={`${
          checkStopTicking.day() ? "cst-countdown-col-out " : ""
        }py-2 px-4 cst-countdown-col`}
      >
        <h1 className="display-4">{dayLeft}</h1>
        <small className="">Day</small>
      </Col>
      <Col
        xs={2}
        md={2}
        lg={2}
        className={`${
          checkStopTicking.hour() ? "cst-countdown-col-out " : ""
        }py-2 px-4 cst-countdown-col`}
      >
        <h1 className="display-4">{hourLeft}</h1>
        <small className="">Hour</small>
      </Col>
      <Col
        xs={2}
        md={2}
        lg={2}
        className={`${
          checkStopTicking.minute() ? "cst-countdown-col-out " : ""
        }py-2 px-4 cst-countdown-col`}
      >
        <h1 className="display-4">{minuteLeft}</h1>
        <small className="">Minute</small>
      </Col>
      <Col
        xs={2}
        md={2}
        lg={2}
        className={`${
          checkStopTicking.second() ? "cst-countdown-col-out " : ""
        }py-2 px-4 cst-countdown-col d-none d-md-flex`}
      >
        <h1 className="display-4">{secondLeft}</h1>
        <small className="">Second</small>
      </Col>
    </Row>
  );
}

export default CountdownTimer;
