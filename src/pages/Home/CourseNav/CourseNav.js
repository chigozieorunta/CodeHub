import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./CourseNav.css";

const navBgTop = {
  backgroundColor: "transparent",
  transition: "all 0.3s",
  left: 0,
  bottom: 0,
  top: "auto",
  position: "absolute",
  padding: "2em 0",
  width: "100%",
};

const navBgScroll = {
  backgroundColor: "#2a2a2a",
  transition: "all 0.3s",
  left: 0,
  bottom: "auto",
  top: 0,
  position: "fixed",
  padding: "2em 0",
  width: "100%",
};

const CourseNav = () => {
  const [navState, setNavState] = useState(navBgTop);

  useEffect(() => {
    window.onscroll = () => {
      const { innerHeight: height, scrollY: scrollPosition } = window;
      scrollPosition > height - 100
        ? setNavState(navBgScroll)
        : setNavState(navBgTop);
    };
  }, []);

  return (
    <section className="site-fixed-nav d-none d-lg-block" style={navState}>
      <Container fluid>
        <div className="site-wrapper">
          <Row>
            <Col lg={12}>
              <ul>
                <li>
                  <a href="https://codehub.pro/courses/html">HTML</a>
                </li>
                <li>
                  <a href="https://codehub.pro/courses/css">CSS</a>
                </li>
                <li>
                  <a href="https://codehub.pro/courses/javascript">
                    JavaScript
                  </a>
                </li>
                <li>
                  <a href="https://codehub.pro/courses/react">React</a>
                </li>
                <li>
                  <a href="https://codehub.pro/courses/nodejs">Node.js</a>
                </li>
                <li>
                  <a href="https://codehub.pro/courses/php">PHP</a>
                </li>
                <li>
                  <a href="https://codehub.pro/courses/laravel">Laravel</a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default CourseNav;
