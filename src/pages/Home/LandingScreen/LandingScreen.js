import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import CenterScreen from "../../../components/CenterScreen/CenterScreen";

import "./LandingScreen.css";

const Landing = () => {
  return (
    <CenterScreen id="landing" nav="coursenav">
      <Row>
        <Col md={9} lg={6} className="site-landing-text">
          <h1 className="site-caption">CodeHub.pro</h1>
          <h3 className="site-excerpt">
            Building the best developers and engineers around the world with
            simple web technologies…
          </h3>
          <Link className="site-button" to="/sign-up">
            Get Started
          </Link>
        </Col>
      </Row>
    </CenterScreen>
  );
};

export default Landing;
