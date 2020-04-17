import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Navigation.css";

const Navigation = () => {
  return (
    <section className="site-fixed-nav">
      <Container fluid>
        <div className="site-wrapper">
          <Row>
            <Col lg={12}>
              <ul>
                <li>
                  <a href="https://codesyrup.io">HTML</a>
                </li>
                <li>
                  <a href="https://codesyrup.io">CSS</a>
                </li>
                <li>
                  <a href="https://codesyrup.io">JavaScript</a>
                </li>
                <li>
                  <a href="https://codesyrup.io">React</a>
                </li>
                <li>
                  <a href="https://codesyrup.io">Node.js</a>
                </li>
                <li>
                  <a href="https://codesyrup.io">PHP</a>
                </li>
                <li>
                  <a href="https://codesyrup.io">Laravel</a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Navigation;
