import { Row, Col } from "antd";
import React from "react";
import "./App.css";

import Nav from "./component/NavBar";

import { BackTop } from "antd";
import Header from "./component/Header";
import IconCard from "./component/card";
import Product from "./component/ProductPricing";
import Features from "./component/features";
import OurResults from "./component/OurResults";
import Review from "./component/Review";
import Feedback from "./Feedback";
import SignUp from "./component/SignUP";
import Footer from "./component/Footer";

const style = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#1088e9",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};

function App() {
  return (
    <>
      <Row>
        <Col span={24}>
          <Nav />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="main_header">
            <Header />
          </div>
        </Col>
      </Row>

      <Row>
        <IconCard />
      </Row>
      <Row>
        <Col span={24}>
          <div className="main_features">
            <Features />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="main_features">
            <OurResults />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="main_review">
            <Review />
          </div>
        </Col>
      </Row>
      <Row className="row_height">
        <Col span={24}>
          <Product />
        </Col>
      </Row>
      <Row className="row_height">
        <Col span={24}>
          <div className="main_feedback">
            <Feedback />
          </div>
        </Col>
      </Row>
      <Row className="row_height">
        <Col span={24}>
          <SignUp />
        </Col>
      </Row>
      <Row className="row_height">
        <Col span={24}>
          <Footer />
        </Col>
      </Row>

      <BackTop>
        <div style={style}>UP</div>
      </BackTop>
    </>
  );
}

export default App;
