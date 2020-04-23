import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => (
  <footer className="section-md">
    <Container fluid>
      <Row className="text-center">
        <Col lg={{ span: 8, offset: 2 }}>
          CodeHub.pro is an online web academy focused on building the best
          developers and engineers around the world with simple web
          technologies… <br />
          Copyright &copy; 2020 CodeHub.pro. All Rights Reserved.
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
