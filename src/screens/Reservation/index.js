import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import toCapitalize from "../../helpers/toCapitalize";
import "./index.scss";

import BannerOverlay from "../../components/BannerOverlay";
import Button from "../../components/Button";
import { takeIcon } from "../../data/iconMapper";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { apis } from "../../api/apis";
import Select, { StylesConfig } from "react-select";

function Reservation() {
  const activityData = {
    title: "RESERVATION",
    text: "Please confirm your attendance",
    buttonText: "SEND",
  };

  const optionGuestCount = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
  ];

  const optionGuestStatus = [
    { value: "Hadir", label: "Hadir" },
    { value: "Tidak Dapat Hadir", label: "Tidak Dapat Hadir" },
  ];

  const colourStyles = {
    control: (style) => {
      return {
        ...style,
        borderColor: "#54442bff",
      };
    },
  };

  const { register, control, handleSubmit, reset } = useForm();
  const [isFetching, SetIsFetching] = useState(true);
  const [pingStatus, setPingStatus] = useState(500);
  const onSubmit = (data) => postData(data);

  const postData = (data) => {
    console.log(data);
    data = {
      ...data,
      guestName: toCapitalize(data.guestName),
      guestCount: data.guestCount.value,
      guestStatus: data.guestStatus.value,
    };
    console.log(data);
    // axios.post(process.env.REACT_APP_RSVP_API, data).then((res) => {});
    // axios.post(apis.rsvp.create, data).then((res) => {});
    reset();
  };

  const ping = () => {
    SetIsFetching(true);
    axios
      .get(apis.ping.get)
      .then((res) => setPingStatus(res.status))
      .finally(() => SetIsFetching(false));
  };

  useEffect(() => {
    ping();
  }, []);

  return (
    <div className="text-center my-4 py-4">
      <AnimationOnScroll
        animateIn="animate__zoomIn"
        className="pb-3"
        animateOnce
      >
        <span>{takeIcon("book")}</span>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__slideInUp" animateOnce>
        <h3 className="fw-bold" style={{ letterSpacing: "5px" }}>
          {activityData.title}
        </h3>
      </AnimationOnScroll>

      <h5 className="text-center py-3">{activityData.text}</h5>

      <Row className="d-flex justify-content-center">
        <Col xs={12} md={6}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Control
              {...register("guestName", { required: true })}
              className="shadow-none my-3"
              placeholder="Name"
              disabled={pingStatus !== 200 || isFetching}
            />
            <Controller
              name="guestCount"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  className="my-3 text-start"
                  placeholder="Number of person"
                  isDisabled={pingStatus !== 200 || isFetching}
                  isLoading={pingStatus !== 200 || isFetching}
                  options={optionGuestCount}
                  styles={colourStyles}
                />
              )}
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
            <Button
              className="mt-5 w-100"
              disabled={pingStatus !== 200 || isFetching}
            >
              {activityData.buttonText}
            </Button>
          </Form>
        </Col>
      </Row>

      {/* <Row className="d-flex justify-content-center py-4">
      <Col xs={9} md={12} className="">
        <h5 className="">{location1}</h5>
      </Col>
      <Col xs={9} md={12}>
        <h5>{location2}</h5>
      </Col>
    </Row> */}
    </div>

    // <div className="d-flex flex-column justify-content-center cst-reserve-bg-photo">
    //   <BannerOverlay className="text-center">
    //     <Row className="m-0 d-flex justify-content-center">
    //       <Col xs={10} md={6}>
    //         <h3 className="cst-reserve-title">{screenContent.title}</h3>
    //         <p>{screenContent.text}</p>
    //         <Form onSubmit={handleSubmit(onSubmit)}>
    //           <Row className="m-0">
    //             <Col md={3} className="p-0 d-flex  align-items-center">
    //               <label>Nama</label>
    //             </Col>
    //             <Col md={9} className="p-0">
    //               <Form.Control
    //                 {...register("guestName", { required: true })}
    //                 className="shadow-none cst-form"
    //               />
    //             </Col>

    //             <Col md={3} className="p-0 d-flex  align-items-center">
    //               <label>Jumlah Tamu</label>
    //             </Col>
    //             <Col md={9} className="p-0">
    //               <Form.Select
    //                 {...register("guestCount", { required: true })}
    //                 className="shadow-none cst-select"
    //               >
    //                 <option>1</option>
    //                 <option>2</option>
    //               </Form.Select>
    //             </Col>

    //             <Col md={3} className="p-0 d-flex  align-items-center">
    //               <label>Kehadiran Tamu</label>
    //             </Col>
    //             <Col md={9} className="p-0">
    //               <Form.Select
    //                 {...register("guestStatus", { required: true })}
    //                 className="shadow-none cst-select"
    //               >
    //                 <option>Hadir</option>
    //                 <option>Tidak Dapat Hadir</option>
    //               </Form.Select>
    //             </Col>
    //           </Row>
    //           <Button className="mt-5 w-100">{screenContent.buttonText}</Button>
    //         </Form>
    //       </Col>
    //     </Row>
    //   </BannerOverlay>
    // </div>
  );
}

export default Reservation;
