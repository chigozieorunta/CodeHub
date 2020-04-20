import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CourseBox from "../CourseBox/CourseBox.js";
import "./Category.css";

const h1 = {
  marginBottom: "0.1em",
};

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json().then((json) => {
        this.setState({
          courses: json,
          isLoaded: true,
        });
      })
    );
  }

  render() {
    const { title, excerpt, total } = this.props;
    return (
      <section className="section-md">
        <Container fluid>
          <div className="site-wrapper">
            <Row className="row-col-spacer">
              <Col lg={3}>
                <small>{total} COURSES</small>
                <h1 className="site-caption" style={h1}>
                  {title}
                </h1>
                <h3 className="site-excerpt">{excerpt}</h3>
                <a className="site-button" href="https://codehub.pro">
                  Explore
                </a>
              </Col>
              <Col lg={9}>
                <Row>
                  {this.state.courses.map((course) => (
                    <CourseBox key={course.name} {...course} />
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    );
  }
}

export default Category;
