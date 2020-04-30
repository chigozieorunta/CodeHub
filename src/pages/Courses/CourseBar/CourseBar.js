import React, { useEffect, useState } from "react";

import CourseNavigationBar from "../../../components/CourseNavigationBar/CourseNavigationBar";

import "./CourseBar.css";

const navBgTop = {
  top: 0,
  left: 0,
  right: 0,
  position: "relative",
  backgroundColor: "#1a1a1a",
  padding: "2em 0",
  marginTop: "70px",
  transition: "all 0.3s",
};

const navBgScroll = {
  top: 0,
  left: 0,
  right: 0,
  position: "fixed",
  backgroundColor: "#2a2a2a",
  width: "100%",
  padding: "2em 0",
  marginTop: 0,
};

const CourseBar = () => {
  const [navState, setNavState] = useState(navBgTop);

  useEffect(() => {
    window.onscroll = () => {
      const { scrollY: scrollPosition } = window;
      scrollPosition > 70 ? setNavState(navBgScroll) : setNavState(navBgTop);
    };
  }, []);

  return (
    <CourseNavigationBar classes="site-fixed-nav-course" style={navState} />
  );
};

export default CourseBar;
