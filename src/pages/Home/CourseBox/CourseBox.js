import React from "react";
import { Col } from "react-bootstrap";
import "./CourseBox.css";

const ReactBox = (props) => {
  const { name } = props;
  return (
    <Col lg={4}>
      <div className="site-course-box">
        <div class="site-fs">
          <div class="site-fs-child">
            <div class="text-center">{name}</div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ReactBox;
