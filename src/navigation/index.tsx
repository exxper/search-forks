import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../features/home';
import Table from '../features/table';
import { ROUTE_PATHS } from './constants';

const Navigation: React.FC = () => {
  return (
    <Switch>
      <Route exact path={ROUTE_PATHS.HOME}>
        <Home />
      </Route>
      <Route path={ROUTE_PATHS.TABLE}>
        <Table />
      </Route>
    </Switch>
  );
};

export default Navigation;
