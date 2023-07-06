import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <h1 className="title">About</h1>
      <div className="content">
        <div className="image"></div>
        <div className="description_wrapper">
          <p className="description">
            The easychat application uses the chatengine api to enable it's
            functionality.
            <br />
            <br />
            Chat Engine is an API which makes it easy to build chat services.
            Building a chat from scratch takes a lot of time, code, and is
            expensive. It's better to use a product instead of writing it from
            scratch. We make it easy to build your chat idea in minutes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
