import React from "react";
import CenterScreen from "../../../components/CenterScreen/CenterScreen";
import { Row, Col } from "react-bootstrap";
import "./Landing.css";

const Landing = () => {
  return (
    <CenterScreen id="landing">
      <Row>
        <Col md={12} lg={6} className="site-landing-text">
          <h1 className="site-caption">CodeHub.pro</h1>
          <h3 className="site-excerpt">
            Building the best developers and engineers around the world with
            simple web technologies…
          </h3>
          <a className="site-button" href="https://codehub.pro">
            Get Started
          </a>
        </Col>
      </Row>
    </CenterScreen>
  );
};

export default Landing;
