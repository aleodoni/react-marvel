import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from './services/history';
import Main from './pages/Main';

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
    </Router>
  );
}
