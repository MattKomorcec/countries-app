import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";

import NavBar from "../../features/nav/NavBar";
import Home from "../../features/home/Home";
import NotFound from "./NotFound";
import CountriesList from "../../features/countries/CountriesList";
import CountryDetails from "../../features/countries/CountryDetails";
import About from "../../features/about/About";

const App: React.FC = () => {
  return (
    <Fragment>
      <Route exact path="/" component={Home} />
      <Route
        path={"/(.+)"}
        render={() => (
          <Fragment>
            <NavBar />
            <Container style={{ paddingTop: "91px" }} fluid>
              <Switch>
                <Route exact path="/countries" component={CountriesList} />
                <Route path="/countries/:id" component={CountryDetails} />
                <Route path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default App;
