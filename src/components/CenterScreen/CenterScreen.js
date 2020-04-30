import React from "react";
import { Container } from "react-bootstrap";

import CourseNavigationBar from "../../pages/Home/CourseNavigationBar/CourseNavigationBar";

const CenterScreen = (props) => {
  return (
    <section className="site-fs" id={props.id}>
      <div className="site-fs-child">
        <div className="site-wrapper">
          <Container fluid>{props.children}</Container>
        </div>
      </div>
      {props.nav && <CourseNavigationBar />}
    </section>
  );
};

export default CenterScreen;
