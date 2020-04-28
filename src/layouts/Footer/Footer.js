import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = ({ css }) => (
  <footer className={`section-md ${css}`}>
    <Container fluid>
      <Row className="text-center">
        <Col lg={{ span: 8, offset: 2 }}>
          <span className="footer-sub-title-1">
            CodeHub.pro is an online web academy focused on building the best
            developers and engineers around the world with simple web
            technologies…
          </span>
          <br />
          <span className="footer-sub-title-2">
            Copyright &copy; 2020 CodeHub.pro. All Rights Reserved.
          </span>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
