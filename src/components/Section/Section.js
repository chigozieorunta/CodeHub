import React from "react";
import { Container } from "react-bootstrap";

const Section = (props) => {
  return (
    <section className="section-md">
      <div className="site-wrapper">
        <Container fluid>{props.children}</Container>
      </div>
    </section>
  );
};

export default Section;
