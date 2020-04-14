import React from "react";

const course = {
  borderRadius: "35px",
  height: "400px",
  background: "#fff",
};

const h1 = {
  marginBottom: "0.1em",
};

const Category = ({ title, excerpt, total }) => {
  return (
    <section className="section-md">
      <div className="codesyrup-compact">
        <div className="grid-md-13">
          <div>
            <small>{total} COURSES</small>
            <h1 className="caption" style={h1}>
              {title}
            </h1>
            <h3 className="excerpt">{excerpt}</h3>
            <a class="button" href="https://codesyrup.io">
              Explore
            </a>
          </div>
          <div>
            <div className="grid-md-3 grid-sm-2">
              <div>
                <div style={course}></div>
              </div>
              <div>
                <div style={course}></div>
              </div>
              <div>
                <div style={course}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
