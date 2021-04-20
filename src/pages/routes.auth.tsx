import { Switch, Route, Redirect } from 'react-router';
import React from 'react';
import HomePage from './index';

const RoutesAuth = () => {
  return (
    <Switch>
      <Route path="/main/welcome" component={HomePage} />
      <Route render={() => <Redirect to="/main/welcome" />} />
    </Switch>
  );
};

export default RoutesAuth;
