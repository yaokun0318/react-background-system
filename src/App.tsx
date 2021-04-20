import React from 'react';
import GlobalStyle from './style/global-style';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import RoutesEntry from './pages/routes.entry';
import 'antd/dist/antd.css';

const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Router history={history}>
          <RoutesEntry />
        </Router>
      </>
    );
  }
}

export default App;
