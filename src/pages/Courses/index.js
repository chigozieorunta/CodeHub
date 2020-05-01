import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Navigation from "../../components/Navigation/Navigation";
import MobileNavigation from "../../components/MobileNavigation/MobileNavigation";
import CheckBox from "../../components/CheckBox/CheckBox";

import CourseBox from "../Home/CourseBox/CourseBox";

import "./index.css";

const Courses = () => {
  return (
    <>
      <Navigation />
      <MobileNavigation />
      <section className="site-top-spacer"></section>
      <section className="section-md">
        <div className="site-wrapper">
          <Container fluid>
            <Row>
              <Col lg={3}>
                <ul class="site-filter">
                  <li>
                    <CheckBox>HTML</CheckBox>
                  </li>
                  <li>
                    <CheckBox>CSS</CheckBox>
                  </li>
                  <li>
                    <CheckBox>JavaScript</CheckBox>
                  </li>
                  <li>
                    <CheckBox>React</CheckBox>
                  </li>
                  <li>
                    <CheckBox>Node.js</CheckBox>
                  </li>
                  <li>
                    <CheckBox>PHP</CheckBox>
                  </li>
                  <li>
                    <CheckBox>Laravel</CheckBox>
                  </li>
                </ul>
              </Col>
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
