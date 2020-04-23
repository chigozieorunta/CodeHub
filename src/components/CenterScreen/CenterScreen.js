import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "../../pages/Home/Navigation/Navigation";

const CenterScreen = (props) => {
  return (
    <section className="site-fs" id={props.id}>
      <div className="site-fs-child">
        <div className="site-wrapper">
          <Container fluid>{props.children}</Container>
        </div>
      </div>
      <Navigation />
    </section>
  );
};

export default CenterScreen;
