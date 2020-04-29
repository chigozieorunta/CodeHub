import React, { useState } from "react";
import "./MobileNav.css";

let state = false;

const hiddenState = {
  left: "-80%",
};

const visibleState = {
  left: "0",
};

const MobileNav = () => {
  const [mobileNavState, setMobileNavState] = useState(hiddenState);

  const slideOut = () => {
    !state ? setMobileNavState(visibleState) : setMobileNavState(hiddenState);
    state = !state;
  };

  return (
    <section>
      <button id="site-mobile-toggler" onClick={slideOut}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul id="site-mobile-nav" style={mobileNavState}>
        <li>
          <a href="http://codehub.pro">Home</a>
        </li>
        <li>
          <a href="http://codehub.pro/courses">Courses</a>
        </li>
        <li>
          <a href="http://codehub.pro/sign-up">Sign Up</a>
        </li>
        <li>
          <a href="http://codehub.pro/login">Login</a>
        </li>
        <li>
          <a href="http://codehub.pro/sign-up">How It Works</a>
        </li>
        <li>
          <a href="http://codehub.pro/sign-up">FAQs</a>
        </li>
      </ul>
    </section>
  );
};

export default MobileNav;
