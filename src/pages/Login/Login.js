import React from "react";
import CenterScreen from "../../components/CenterScreen/CenterScreen";
import Navigation from "../../components/Navigation/Navigation";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  return (
    <>
      <Navigation />
      <CenterScreen id="landing">
        <Row>
          <Col lg={{ span: 4, offset: 4 }} className="site-landing-text">
            <h3 className="text-center">Welcome, Back!</h3>
            <Form>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="you@email.com"
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="*****"
                ></Form.Control>
              </Form.Group>
              <Button className="btn btn-block site-btn-login">Login</Button>
              <Button className="btn btn-block site-btn-facebook">
                Facebook
              </Button>
              <Button className="btn btn-block site-btn-google">Google</Button>
            </Form>
          </Col>
        </Row>
      </CenterScreen>
    </>
  );
};

export default Login;
