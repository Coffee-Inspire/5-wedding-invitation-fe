import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toCapitalize from "../../helpers/toCapitalize";
import { takeIcon } from "../../data/iconMapper";
import Button from "../../components/Button";
import { apis } from "../../api/apis";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Wish() {
  const activityData = {
    title: "WISHES",
    category: "Formal",
    buttonText: "SEND WISH",
  };

  const [data, setData] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const [isFetching, setIsFetching] = useState(false);
  const [pingStatus, setPingStatus] = useState(500);

  const onSubmit = (formData) => postData(formData);

  const ping = () => {
    setIsFetching(true);
    axios
      .get(apis.ping.get)
      .then((res) => setPingStatus(res.status))
      .finally(() => setIsFetching(false));
  };

  const getData = () => {
    setIsFetching(true);
    axios
      .get(apis.wish.get)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err))
      .finally(() => setIsFetching(false));
  };

  const postData = (data) => {
    data = { ...data, name: toCapitalize(data.name) };
    setIsFetching(true);
    axios
      .post(apis.wish.create, data)
      .then((res) => getData())
      .catch((err) => console.error(err))
      .finally(() => setIsFetching(false));
    reset();
  };

  useEffect(() => {
    ping();
    getData();
  }, []);

  return (
    // <div className="text-center my-4 py-4 cst-bg-2">
    <Row className="mx-0 cst-bg-3 text-center py-5 ">
      <Col xs={12} className="py-5">
        {/* <div className="text-center pb-3">
          <span style={{ fill: "red !important" }}>
            {takeIcon("loveLetter")}
          </span>
        </div>
        <div className="text-center">
          <h3
            className="fw-bold"
            style={{ letterSpacing: "5px", color: "#fff" }}
          >
            {activityData.title}
          </h3>
        </div> */}
        {/* <AnimationOnScroll
          animateIn="animate__zoomIn"
          className="pb-3"
          animateOnce
        >
          <span>{takeIcon("loveLetter")}</span>
        </AnimationOnScroll> */}
        <AnimationOnScroll animateIn="animate__slideInUp" animateOnce>
          <div className="d-flex align-items-center justify-content-center">
            <div className="cst-color-1 p-4 position-relative">
              <h1 className="display-3 py-1" style={{ letterSpacing: "5px" }}>
                Wish
              </h1>
              <h1
                className="cst-font-1 position-absolute"
                style={{ bottom: "10%", left: "30%" }}
              >
                Message
              </h1>
            </div>
          </div>
        </AnimationOnScroll>
      </Col>
      <Col xs={12}>
        <Row className="d-flex justify-content-center">
          <Col xs={11} md={6}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Control
                {...register("name", { required: true })}
                className="shadow-none my-3"
                placeholder="Name"
                disabled={pingStatus !== 200 || isFetching}
              />
              <Form.Control
                as="textarea"
                rows={6}
                {...register("wish", { required: true })}
                className="shadow-none my-3"
                placeholder="Message"
                disabled={pingStatus !== 200 || isFetching}
              />
              <Button
                theme={2}
                className="mt-5 py-2 w-100"
                disabled={pingStatus !== 200 || isFetching}
              >
                {activityData.buttonText}
              </Button>
            </Form>
          </Col>
        </Row>
      </Col>
      <Col xs={12} className="py-5">
        <Row className="mx-0 d-flex justify-content-center cst-wish-section">
          <Col xs={12} className="mb-4">
            {data && (
              <small className="cst-color-1">
                {(data && data.length) || 0} Wish Messages
              </small>
            )}
          </Col>
          <Col xs={11} md={6} className="cst-wish-canvas pe-4">
            {data &&
              data.length > 0 &&
              data
                .map((item, idx) => (
                  <div key={item.id} className="text-start mt-3 cst-wish-card">
                    <h6 className="fw-bold">{item.name}</h6>
                    <p style={{ color: "rgba(255,255,255,0.6)" }}>
                      {item.wish}
                    </p>
                  </div>
                ))
                .reverse()}
          </Col>
        </Row>
      </Col>
    </Row>
    // </div>
  );
}

export default Wish;
