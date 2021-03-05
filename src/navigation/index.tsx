import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Search from '../features/search';
import Table from '../features/table';
import { ROUTE_PATHS } from './constants';

const Navigation: React.FC = () => {
  return (
    <Switch>
      <Route path={ROUTE_PATHS.SEARCH}>
        <Search />
      </Route>
      <Route path={ROUTE_PATHS.TABLE}>
        <Table />
      </Route>
    </Switch>
  );
};

export default Navigation;
