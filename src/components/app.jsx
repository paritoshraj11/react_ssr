import React from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";

import AppBar from "./common/appBar";
import { Toolbar } from "@material-ui/core";
import RepoGrid from "./common/repoGrid";
import Home from "./home";
const App = props => {
  return (
    <div>
      <AppBar />
      <Toolbar />
      <RepoGrid />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
};

export default App;
