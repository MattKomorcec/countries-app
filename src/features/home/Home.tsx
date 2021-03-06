import React from "react";
import { Segment, Container, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { MAIN_COLOR, WHITE } from "../../app/common/util";

const styles = {
  display: "flex",
  alignItems: "center",
  height: "100vh",
  backgroundImage: "url('/assets/homepage_bg.jpg')",
  backgroundBlendMode: "overlay"
};

const Home = () => {
  return (
    <Segment inverted textAlign="center" vertical style={styles}>
      <Container text>
        <Header as="h1" inverted>
          Welcome to the Countries App
        </Header>
        <Button
          as={Link}
          to="/countries"
          size="huge"
          inverted
          style={{ backgroundColor: MAIN_COLOR, color: WHITE }}
        >
          Go to countries
        </Button>
      </Container>
    </Segment>
  );
};

export default Home;
