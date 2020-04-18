import React from "react";
import Navigation from "../Navigation/Navigation";
import { Container, Row, Col } from "react-bootstrap";
import "./Landing.css";

const Landing = () => {
  return (
    <section className="site-fs" id="landing">
      <div className="site-fs-child">
        <Container fluid>
          <div className="site-wrapper">
            <Row>
              <Col md={12} lg={6}>
                <h1 className="site-caption">CodeHub.pro</h1>
                <h3 className="site-excerpt d-none d-sm-block">
                  Building the best developers and engineers around the world
                  with simple web technologies…
                </h3>
                <h3 className="site-excerpt d-block d-sm-none">
                  Building the best developers using simple web technologies…
                </h3>
                <a className="site-button" href="https://codesyrup.io">
                  Get Started
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Navigation />
    </section>
  );
};

export default Landing;
