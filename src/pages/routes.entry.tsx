import * as React from 'react';
import Main from './main';
import { Redirect, Route, Switch } from 'react-router-dom';

const RoutesEntry = () => (
  <Switch>
    <Route
      exact
      path="/main/:page/:subPage/:subPage2/:subPage3*"
      component={Main}
    />
    <Route exact path="/main/:page/:subPage/:subPage2*" component={Main} />
    <Route exact path="/main/:page/:subPage*" component={Main} />
    <Route exact path="/main/:page*" component={Main} />
    <Route render={() => <Redirect to="/main/welcome" />} />
  </Switch>
);

export default RoutesEntry;
