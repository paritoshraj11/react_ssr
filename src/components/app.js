import React from "react";
import { Route, Switch } from "react-router-dom";
import AppBar from "./common/appBar";
import { Toolbar } from "@material-ui/core";
import RepoGrid from "./common/repoGrid";
import routes from "../shared/routes";
const App = props => {
  return (
    <div>
      <AppBar />
      <Toolbar />
      <RepoGrid />
      <Switch>
        {routes.map(({ path, exact, component: C, ...rest }, index) => {
          return (
            <Route
              key={`__route${index}`}
              path={path}
              exact={exact}
              render={props => <C {...props} {...rest} />}
            />
          );
        })}
      </Switch>
    </div>
  );
};

export default App;
