import React from "react";
import axios from "axios";
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
      <Home />
    </div>
  );
};

export default App;
