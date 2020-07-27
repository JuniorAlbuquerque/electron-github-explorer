import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Dashboard}/>
      <Route path="/repository" component={Repository}/>
    </Switch>
  </HashRouter>
)
export default Routes;
