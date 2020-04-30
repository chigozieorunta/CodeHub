import React, { useEffect, useState } from "react";

import CourseNavigationBar from "../../../components/CourseNavigationBar/CourseNavigationBar";

import "./CourseBar.css";

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

const CourseBar = () => {
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
    <CourseNavigationBar
      classes="site-fixed-nav d-none d-lg-block"
      style={navState}
    />
  );
};

export default CourseBar;
