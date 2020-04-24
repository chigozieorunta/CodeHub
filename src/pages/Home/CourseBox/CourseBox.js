import React from "react";
import { Col } from "react-bootstrap";
import "./CourseBox.css";

const CourseBox = (props) => {
  const { name } = props;
  return (
    <Col lg={12}>
      <div className="site-course-box">
        <div className="site-course-name text-center">{name}</div>
      </div>
    </Col>
  );
};

export default CourseBox;

/*<Row>
  <Col sm={{ span: 6, offset: 3 }}>
    <img
      src={require("../../../assets/images/" + image)}
      alt={image}
      className="img-fluid mx-auto"
    />
  </Col>
</Row>;*/
