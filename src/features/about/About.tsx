import React from "react";
import { Card } from "semantic-ui-react";

const About = () => {
  return (
    <Card fluid>
      <Card.Content header="Tech stack" />
      <Card.Content>
        <ul>
          <li>JavaScript, HTML, CSS</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>React-router</li>
        </ul>
      </Card.Content>
    </Card>
  );
};

export default About;
