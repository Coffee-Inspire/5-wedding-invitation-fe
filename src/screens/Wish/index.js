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
  const [isFetching, setIsFetching] = useState(true);
  const [pingStatus, setPingStatus] = useState(500);

  const onSubmit = (formData) => postData(formData);

  const postData = (data) => {
    console.log(data);
    data = { ...data, name: toCapitalize(data.name) };
    console.log(data);
    // axios.post(process.env.REACT_APP_WISH_API, data)
    //   .then((res) => setData(res.data.data))
    //   .catch((err) => console.error(err));
    reset();
  };

  const getData = () => {
    const dummyData = [
      { id: 1, name: "Guest Number 1", wish: "Lorem Ipsum de amet el primo" },
      { id: 2, name: "Guest Number 2", wish: "Lorem Ipsum de amet el primo" },
      { id: 3, name: "Guest Number 3", wish: "Lorem Ipsum de amet el primo" },
      { id: 4, name: "Guest Number 4", wish: "Lorem Ipsum de amet el primo" },
      { id: 5, name: "Guest Number 5", wish: "Lorem Ipsum de amet el primo" },
      { id: 6, name: "Guest Number 6", wish: "Lorem Ipsum de amet el primo" },
      { id: 7, name: "Guest Number 7", wish: "Lorem Ipsum de amet el primo" },
      {
        id: 8,
        name: "Guest Number 8",
        wish: "Wah selamat yaa sayang Lorem Ipsum de amet el primo Lorem Ipsum de amet el primo Lorem Ipsum de amet el primo Lorem Ipsum de amet el primo!!!!",
      },
    ];
    setData(dummyData);
    // axios
    //   .get(apis.wish.get)
    //   .then((res) => setData(res.data))
    //   .catch((err) => console.error(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    // <div className="text-center my-4 py-4 cst-bg-2">
    <Row className="cst-bg-2 text-center my-4 py-4 px-0">
      <Col xs={12}>
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
                // disabled={pingStatus !== 200 || isFetching}
              />
              <Form.Control
                as="textarea"
                {...register("wish", { required: true })}
                className="shadow-none my-3"
                placeholder="Message"
                // disabled={pingStatus !== 200 || isFetching}
              />
              <Button
                theme={2}
                className="mt-5 w-50"
                // disabled={pingStatus !== 200 || isFetching}
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
