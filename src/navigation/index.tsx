import React from "react";
import { Route, Switch } from "react-router-dom";

import Main from "../features/main";
import { ROUTE_PATHS } from "./constants";

const Navigation: React.FC = () => {
  return (
    <Switch>
      <Route path={ROUTE_PATHS.MAIN}>
        <Main />
      </Route>
    </Switch>
  );
};

export default Navigation;
