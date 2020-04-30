import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Navigation from "../../components/Navigation/Navigation";
import MobileNavigation from "../../components/MobileNavigation/MobileNavigation";

import CourseBar from "./CourseBar/CourseBar";

import CourseBox from "../Home/CourseBox/CourseBox";

const Courses = () => {
  return (
    <>
      <Navigation />
      <MobileNavigation />
      <CourseBar />
      <section className="section-md">
        <div className="site-wrapper">
          <Container fluid>
            <Row>
              <Col lg={3}></Col>
              <Col lg={9}>
                <Row className="row-spacer row-col-spacer">
                  <Col lg={4}>
                    <Row>
                      <CourseBox name="CSS Selectors" />
                    </Row>
                  </Col>
                  <Col lg={4}>
                    <Row>
                      <CourseBox name="Elements & Attributes" />
                    </Row>
                  </Col>
                  <Col lg={4}>
                    <Row>
                      <CourseBox name="Variables" />
                    </Row>
                  </Col>
                </Row>

                <Row className="row-spacer row-col-spacer">
                  <Col lg={4}>
                    <Row>
                      <CourseBox name="CSS Selectors" />
                    </Row>
                  </Col>
                  <Col lg={4}>
                    <Row>
                      <CourseBox name="Elements & Attributes" />
                    </Row>
                  </Col>
                  <Col lg={4}>
                    <Row>
                      <CourseBox name="Variables" />
                    </Row>
                  </Col>
                </Row>

                <Row className="row-spacer row-col-spacer">
                  <Col lg={4}>
                    <Row>
                      <CourseBox name="CSS Selectors" />
                    </Row>
                  </Col>
                  <Col lg={4}>
                    <Row>
                      <CourseBox name="Elements & Attributes" />
                    </Row>
                  </Col>
                  <Col lg={4}>
                    <Row>
                      <CourseBox name="Variables" />
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Courses;
