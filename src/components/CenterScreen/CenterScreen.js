import React from "react";
import { Container } from "react-bootstrap";

import CourseBar from "../../pages/Home/CourseBar/CourseBar";

const CenterScreen = (props) => {
  return (
    <section className="site-fs" id={props.id}>
      <div className="site-fs-child">
        <div className="site-wrapper">
          <Container fluid>{props.children}</Container>
        </div>
      </div>
      {props.nav && <CourseBar />}
    </section>
  );
};

export default CenterScreen;
