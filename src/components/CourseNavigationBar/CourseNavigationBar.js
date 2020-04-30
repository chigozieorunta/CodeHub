import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import CourseNavigation from "../CourseNavigation/CourseNavigation";

import "./CourseNavigationBar.css";

const CourseNavigationBar = ({ id, classes, style }) => {
  return (
    <section id={id} className={classes} style={style}>
      <Container fluid>
        <div className="site-wrapper">
          <Row>
            <Col lg={12}>
              <CourseNavigation />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default CourseNavigationBar;
