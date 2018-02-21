import React from 'react';
import { BrowserRouter as Router, BrowserHistory, Switch, Route } from 'react-router-dom';
import App from '../containers/App';
import MoviesItem from '../containers/MoviesItem';
import Header from '../components/main/Header'


const Root = () => {
  return (
    <Router history={BrowserHistory}>
      <div>
        <Header/>
        <Switch>
          <Route exact path="/movies/:id" component={MoviesItem} />
          <Route exact path="/" component={App} />
        </Switch>
      </div>
    </Router>
  );
};

export default Root;

