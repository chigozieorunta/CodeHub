import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Landing.css";

const Landing = () => {
  return (
    <section className="fullscreen" id="landing">
      <div className="fullscreen-child">
        <div className="codesyrup-compact">
          <div className="grid-md-11 grid-lg-23">
            <div>
              <h1 class="caption">CodeSyrup.io</h1>
              <h3 class="excerpt">
                Building the best developers and engineers around the world with
                simple web technologies…
              </h3>
              <a class="button" href="https://codesyrup.io">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
      <Navigation />
    </section>
  );
};

export default Landing;
