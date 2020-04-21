import React from "react";
import { Col } from "react-bootstrap";
import "./CourseBox.css";

const ReactBox = (props) => {
  const { name } = props;
  return (
    <Col lg={12}>
      <div className="site-course-box">
        <div className="site-fs">
          <div className="site-fs-child">
            <div className="text-center">{name}</div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ReactBox;
