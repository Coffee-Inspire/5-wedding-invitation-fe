import React, { useState, useEffect } from "react";
import { Row, Col, Form, Alert } from "react-bootstrap";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import toCapitalize from "../../helpers/toCapitalize";

import Button from "../../components/Button";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { apis } from "../../api/apis";
import Select from "react-select";

function Reservation() {
  const [alertMessageShow, setAlertMessageShow] = useState(false);

  const activityData = {
    title: "RSVP",
    text: "Guests are kindly requested to fill out the attendance form below",
    buttonText: "SEND RSVP",
  };

  const optionGuestCount = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
  ];

  const optionGuestStatus = [
    { value: "Attending", label: "Attending" },
    { value: "Not Attending", label: "Not Attending" },
  ];

  const colourStyles = {
    control: (style) => {
      return {
        ...style,
        borderColor: "#54442bff",
      };
    },
  };

  const { register, control, handleSubmit, reset, watch } = useForm();
  const [disableGuestCount, setDisableGuestCount] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [pingStatus, setPingStatus] = useState(500);
  const onSubmit = (data) => postData(data);

  const postData = (data) => {
    data = {
      ...data,
      guestName: toCapitalize(data.guestName),
      guestStatus: data.guestStatus?.value,
      guestCount: data.guestCount?.value,
    };
    setIsFetching(true);
    axios
      .post(apis.rsvp.create, data)
      .then(() => setAlertMessageShow(true))
      .finally(() => setIsFetching(false));
    reset();
  };

  const ping = () => {
    setIsFetching(true);
    axios
      .get(apis.ping.get)
      .then((res) => setPingStatus(res.status))
      .finally(() => setIsFetching(false));
  };

  useEffect(() => {
    ping();

    axios.get(apis.rsvp.get).then(() => {});
  }, []);

  const watchGuestStatus = watch("guestStatus");
  useEffect(() => {
    if (watchGuestStatus) {
      if (watchGuestStatus.value === "Not Attending") {
        setDisableGuestCount(true);
      } else setDisableGuestCount(false);
    }
  }, [watchGuestStatus]);

  useEffect(() => {
    if (alertMessageShow) {
      setTimeout(() => {
        setAlertMessageShow(false);
      }, 5000);
    }
  }, [alertMessageShow]);

  return (
    <div
      className="text-center cst-bg-2"
      style={{ padding: "150px 0 150px 0" }}
    >
      <AnimationOnScroll animateIn="animate__slideInUp" animateOnce>
        <h3 style={{ letterSpacing: "5px" }}>{activityData.title}</h3>
      </AnimationOnScroll>

      <p className="text-center p-3">{activityData.text}</p>

      <Row className="g-0 d-flex flex-column align-items-center justify-content-center">
        <Col xs={11} md={6}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Control
              {...register("guestName", { required: true })}
              className="shadow-none my-3"
              placeholder="Name"
              disabled={pingStatus !== 200 || isFetching}
            />
            <Controller
              name="guestStatus"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  className="my-3 text-start"
                  placeholder="Attendance status"
                  isDisabled={pingStatus !== 200 || isFetching}
                  isLoading={pingStatus !== 200 || isFetching}
                  options={optionGuestStatus}
                  styles={colourStyles}
                />
              )}
            />
            <Controller
              name="guestCount"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  // disabled={disableGuestCount}
                  className="my-3 text-start"
                  placeholder="Number of person"
                  isDisabled={
                    pingStatus !== 200 || isFetching || disableGuestCount
                  }
                  isLoading={pingStatus !== 200 || isFetching}
                  options={optionGuestCount}
                  styles={colourStyles}
                />
              )}
            />
            <Button
              className="mt-5 py-3 w-100"
              disabled={pingStatus !== 200 || isFetching}
            >
              {activityData.buttonText}
            </Button>
          </Form>
        </Col>
        <Col xs={11} md={6} className="pt-4">
          <Alert
            variant="success"
            dismissible
            show={alertMessageShow}
            onClose={() => setAlertMessageShow(false)}
          >
            Thank you for confirming your attendance.
          </Alert>
        </Col>
      </Row>
    </div>
  );
}

export default Reservation;
