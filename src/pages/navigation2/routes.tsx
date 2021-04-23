import { Switch, Route, Redirect } from 'react-router';
import React from 'react';
import Navigation2 from './index';

const RoutesAuth = () => {
  return (
    <Switch>
      <Route path="/main/navigation2" component={Navigation2} />
      <Route render={() => <Redirect to="/main/navigation2" />} />
    </Switch>
  );
};

export default RoutesAuth;
