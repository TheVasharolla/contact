import React from "react";

const About = props => {
  return (
    <div>
      <h1 className="display-4">About Contact</h1>
      {props.match.params.id}
      <p className="lead">Learning React</p>
      <p className="text-secondary">v1.0</p>
    </div>
  );
};
export default About;
