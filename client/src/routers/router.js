import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Converter from '../components/Converter.js';
import ErrorPage from '../components/ErrorPage.js';

const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={ Converter } />
        <Route component={ ErrorPage } />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
