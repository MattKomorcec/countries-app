import React from "react";
import { Segment, Header, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name="search" />
        It seems this route doesn't exist.
      </Header>
      <Segment.Inline>
        <Button as={Link} to="/countries" primary>
          Return to Countries page
        </Button>
      </Segment.Inline>
    </Segment>
  );
};

export default NotFound;
