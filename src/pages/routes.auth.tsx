import { Switch, Route, Redirect } from 'react-router';
import React from 'react';
import HomePage from './index';
import NavigationOne from './navigation1/routes';
import NavigationTwo from './navigation2/routes';

const RoutesAuth = () => {
  return (
    <Switch>
      <Route path="/main/welcome" component={HomePage} />
      <Route path="/main/navigation" component={NavigationOne} />
      <Route path="/main/navigation2" component={NavigationTwo} />
      <Route render={() => <Redirect to="/main/welcome" />} />
    </Switch>
  );
};

export default RoutesAuth;
