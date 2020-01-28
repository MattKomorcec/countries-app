import React from "react";
import { Card, Container } from "semantic-ui-react";

const About = () => {
  return (
    <Container>
      <Card fluid>
        <Card.Content header="Tech stack" />
        <Card.Content>
          <ul>
            <li>TypeScript</li>
            <li>React</li>
            <li>React-router</li>
            <li>MobX</li>
            <li>Semantic UI</li>
            <li>Axios</li>
            <li>Cypress</li>
          </ul>
        </Card.Content>
      </Card>
    </Container>
  );
};

export default About;
