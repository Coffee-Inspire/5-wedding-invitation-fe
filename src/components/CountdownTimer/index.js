import React, { useState, useEffect } from "react";
import moment from "moment";
import { Row, Col } from "react-bootstrap";

import timing from "../../helpers/timing";
import "./index.scss";

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
      if (data.seconds >= 0) {
        setYearLeft(data.years);
        setMonthLeft(data.months);
        setDayLeft(data.days);
        setHourLeft(data.hours);
        setMinuteLeft(data.minutes);
        setSecondLeft(data.seconds);
      }
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
        }py-2 px-4 m-1 cst-countdown-col`}
      >
        <h1 className="">{monthLeft}</h1>
        <p className="">Month</p>
      </Col>
      <Col
        xs={2}
        md={2}
        lg={2}
        className={`${
          checkStopTicking.day() ? "cst-countdown-col-out " : ""
        }py-2 px-4 m-1 cst-countdown-col`}
      >
        <h1 className="">{dayLeft}</h1>
        <p className="">Day</p>
      </Col>
      <Col
        xs={2}
        md={2}
        lg={2}
        className={`${
          checkStopTicking.hour() ? "cst-countdown-col-out " : ""
        }py-2 px-4 m-1 cst-countdown-col`}
      >
        <h1 className="">{hourLeft}</h1>
        <p className="">Hour</p>
      </Col>
      <Col
        xs={2}
        md={2}
        lg={2}
        className={`${
          checkStopTicking.minute() ? "cst-countdown-col-out " : ""
        }py-2 px-4 m-1 cst-countdown-col`}
      >
        <h1 className="">{minuteLeft}</h1>
        <p className="">Minute</p>
      </Col>
      <Col
        xs={2}
        md={2}
        lg={2}
        className={`${
          checkStopTicking.second() ? "cst-countdown-col-out " : ""
        }py-2 px-4 m-1 cst-countdown-col d-none d-md-flex`}
      >
        <h1 className="">{secondLeft}</h1>
        <p className="">Second</p>
      </Col>
    </Row>
  );
}

export default CountdownTimer;
