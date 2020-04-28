import React from "react";
import CenterScreen from "../../components/CenterScreen/CenterScreen";
import Navigation from "../../components/Navigation/Navigation";
import Separator from "../../components/Separator/Separator";
import Footer from "../../layouts/Footer/Footer";
import { Row, Col, Form, Button } from "react-bootstrap";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Login.css";

const Login = () => {
  return (
    <>
      <Navigation />
      <CenterScreen>
        <Row>
          <Col lg={{ span: 4, offset: 4 }}>
            <h3 className="text-center">Login</h3>
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
                  placeholder="********"
                ></Form.Control>
              </Form.Group>
              <Button className="btn btn-block site-btn-login">Login</Button>
              <Separator>OR</Separator>
              <Button className="btn btn-block site-btn-facebook">
                Facebook
              </Button>
              <Button className="btn btn-block site-btn-google">Google</Button>
            </Form>
          </Col>
        </Row>
      </CenterScreen>
      <Footer css="footer" />
    </>
  );
};

export default Login;
