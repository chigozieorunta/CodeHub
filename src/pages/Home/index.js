import React from "react";
import Landing from "./Landing/Landing";
import Courses from "./Courses/Courses";
import Footer from "../../layouts/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import MobileNav from "../../components/MobileNav/MobileNav";

const Home = () => {
  return (
    <>
      <MobileNav />
      <Navigation />
      <Landing />
      <Courses />
      <Footer />
    </>
  );
};

export default Home;
