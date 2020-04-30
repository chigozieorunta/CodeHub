import React from "react";
import { Container } from "react-bootstrap";

import CourseNavigation from "../CourseNavigation/CourseNavigation";

const CenterScreen = (props) => {
  return (
    <section className="site-fs" id={props.id}>
      <div className="site-fs-child">
        <div className="site-wrapper">
          <Container fluid>{props.children}</Container>
        </div>
      </div>
      {props.nav && <CourseNavigation />}
    </section>
  );
};

export default CenterScreen;
