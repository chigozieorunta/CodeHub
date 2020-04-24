import React from "react";
import { Container } from "react-bootstrap";
import CourseNav from "../../pages/Home/CourseNav/CourseNav";

const CenterScreen = (props) => {
  return (
    <section className="site-fs" id={props.id}>
      <div className="site-fs-child">
        <div className="site-wrapper">
          <Container fluid>{props.children}</Container>
        </div>
      </div>
      {props.nav && <CourseNav />}
    </section>
  );
};

export default CenterScreen;
