import React from "react";
import CenterScreen from "../../components/CenterScreen/CenterScreen";
import { Row, Col } from "react-bootstrap";

const Login = () => {
  return (
    <CenterScreen id="landing">
      <Row>
        <Col
          lg={{ span: 4, offset: 4 }}
          className="site-landing-text text-center"
        >
          <h1 className="site-caption">Login</h1>
          <h5 className="site-footnote">Enter your username and password...</h5>
        </Col>
      </Row>
    </CenterScreen>
  );
};

export default Login;
