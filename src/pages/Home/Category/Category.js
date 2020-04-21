import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CourseBox from "../CourseBox/CourseBox.js";
import Slider from "react-slick";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Category.css";

const h1 = {
  marginBottom: "0.1em",
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  swipeToSlide: true,
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
                  <Slider {...settings}>
                    {this.state.courses.map((course) => (
                      <CourseBox key={course.name} {...course} />
                    ))}
                  </Slider>
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
