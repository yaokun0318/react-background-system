import { Switch, Route, Redirect } from 'react-router';
import React from 'react';
import Navigation1 from './index';

const RoutesAuth = () => {
  return (
    <Switch>
      <Route path="/main/navigation" component={Navigation1} />
      <Route render={() => <Redirect to="/main/navigation" />} />
    </Switch>
  );
};

export default RoutesAuth;
