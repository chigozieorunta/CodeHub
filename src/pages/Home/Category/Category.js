import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import Section from "../../../components/Section/Section";
import CourseBox from "../CourseBox/CourseBox.js";
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
  responsive: [
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const categories = {
  html: [
    {
      id: 1,
      name: "HTML for Beginners, A to Z",
      author: "Chigozie Orunta",
    },
    {
      id: 2,
      name: "Elements & Attributes",
      author: "Chigozie Orunta",
    },
    {
      id: 3,
      name: "Table Elements",
      author: "Chigozie Orunta",
    },
    {
      id: 4,
      name: "Form Elements",
      author: "Chigozie Orunta",
    },
    {
      id: 5,
      name: "Head Elements",
      author: "Chigozie Orunta",
    },
  ],
  css: [
    {
      id: 6,
      name: "CSS For Beginners, A to Z",
      author: "Chigozie Orunta",
    },
    {
      id: 7,
      name: "Selectors",
      author: "Chigozie Orunta",
    },
    {
      id: 8,
      name: "Properties & Values",
      author: "Chigozie Orunta",
    },
    {
      id: 9,
      name: "Media Queries",
      author: "Chigozie Orunta",
    },
    {
      id: 10,
      name: "Flex Box & Grids",
      author: "Chigozie Orunta",
    },
  ],
  js: [
    {
      id: 11,
      name: "JavaScript For Beginners, A to Z",
      author: "Chigozie Orunta",
    },
    {
      id: 12,
      name: "Variables",
      author: "Chigozie Orunta",
    },
    {
      id: 13,
      name: "Arrays",
      author: "Chigozie Orunta",
    },
    {
      id: 14,
      name: "Functions",
      author: "Chigozie Orunta",
    },
    {
      id: 15,
      name: "Objects",
      author: "Chigozie Orunta",
    },
  ],
  node: [
    {
      id: 16,
      name: "Node For Beginners, A to Z",
      author: "Chigozie Orunta",
    },
    {
      id: 17,
      name: "Modules",
      author: "Chigozie Orunta",
    },
    {
      id: 18,
      name: "RESTful APIs",
      author: "Chigozie Orunta",
    },
    {
      id: 19,
      name: "Input/Output Operations",
      author: "Chigozie Orunta",
    },
    {
      id: 20,
      name: "Node Apps",
      author: "Chigozie Orunta",
    },
  ],
  php: [
    {
      id: 21,
      name: "PHP For Beginners, A to Z",
      author: "Chigozie Orunta",
    },
    {
      id: 22,
      name: "Variables",
      author: "Chigozie Orunta",
    },
    {
      id: 23,
      name: "Arrays",
      author: "Chigozie Orunta",
    },
    {
      id: 24,
      name: "Functions",
      author: "Chigozie Orunta",
    },
    {
      id: 25,
      name: "Iterations",
      author: "Chigozie Orunta",
    },
  ],
  lara: [
    {
      id: 26,
      name: "Laravel For Beginners, A to Z",
      author: "Chigozie Orunta",
    },
    {
      id: 27,
      name: "Models",
      author: "Chigozie Orunta",
    },
    {
      id: 28,
      name: "Controllers",
      author: "Chigozie Orunta",
    },
    {
      id: 29,
      name: "Views",
      author: "Chigozie Orunta",
    },
    {
      id: 30,
      name: "Blade Templating Engine",
      author: "Chigozie Orunta",
    },
  ],
  react: [
    {
      id: 31,
      name: "React For Beginners, A to Z",
      author: "Chigozie Orunta",
    },
    {
      id: 32,
      name: "Components",
      author: "Chigozie Orunta",
    },
    {
      id: 33,
      name: "Props",
      author: "Chigozie Orunta",
    },
    {
      id: 34,
      name: "State Management",
      author: "Chigozie Orunta",
    },
    {
      id: 35,
      name: "Redux",
      author: "Chigozie Orunta",
    },
  ],
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
    switch (this.props.id) {
      case 1:
        this.setState({
          courses: categories.html,
          isLoaded: true,
        });
        break;

      case 2:
        this.setState({
          courses: categories.css,
          isLoaded: true,
        });
        break;

      case 3:
        this.setState({
          courses: categories.js,
          isLoaded: true,
        });
        break;

      case 4:
        this.setState({
          courses: categories.react,
          isLoaded: true,
        });
        break;

      case 5:
        this.setState({
          courses: categories.node,
          isLoaded: true,
        });
        break;

      case 6:
        this.setState({
          courses: categories.php,
          isLoaded: true,
        });
        break;

      case 7:
        this.setState({
          courses: categories.lara,
          isLoaded: true,
        });
        break;

      default:
        break;
    }
  }

  render() {
    const { title, excerpt, total } = this.props;
    return (
      <Section>
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
      </Section>
    );
  }
}

export default Category;

/*fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
  res.json().then((json) => {
    this.setState({
      courses: json,
      isLoaded: true,
    });
  })
);*/

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
