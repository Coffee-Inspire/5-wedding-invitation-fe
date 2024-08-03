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
    <Row className="cst-bg-2 text-center my-4 py-4 px-0">
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
        <AnimationOnScroll
          animateIn="animate__zoomIn"
          className="pb-3"
          animateOnce
        >
          <span>{takeIcon("loveLetter")}</span>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__slideInUp" animateOnce>
          <h3
            className="fw-bold"
            style={{ letterSpacing: "5px", color: "#fff" }}
          >
            {activityData.title}
          </h3>
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
                {...register("wish", { required: true })}
                className="shadow-none my-3"
                placeholder="Message"
                disabled={pingStatus !== 200 || isFetching}
              />
              <Button
                theme={2}
                className="mt-5 w-50"
                disabled={pingStatus !== 200 || isFetching}
              >
                {activityData.buttonText}
              </Button>
            </Form>
          </Col>
        </Row>
      </Col>
      <Col xs={12} className="pb-5">
        <Row className="mx-0 d-flex justify-content-center cst-wish-section">
          <Col xs={11} md={6} className="cst-wish-canvas pe-4">
            {data.length > 0 &&
              data
                .map((item, idx) => (
                  <div key={item.id} className="text-start mt-3 cst-wish-card">
                    <h5>{item.name}</h5>
                    <p
                      className="fst-italic cst-text-darken"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
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
