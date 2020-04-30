import React from "react";

import Navigation from "../../components/Navigation/Navigation";
import MobileNavigation from "../../components/MobileNavigation/MobileNavigation";

import LandingScreen from "./LandingScreen/LandingScreen";
import CourseSection from "./CourseSection/CourseSection";

import Footer from "../../layouts/Footer/Footer";

const Home = () => {
  return (
    <>
      <MobileNavigation />
      <Navigation />
      <LandingScreen />
      <CourseSection />
      <Footer />
    </>
  );
};

export default Home;
