import React from 'react';
import Header from 'Components/Header';
import Home from 'Routes/Home';
import TV from 'Routes/TV';
import Search from 'Routes/Search';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';



export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/tv/popular" render={() => <h1>popular</h1>} />
        <Route path="/search" component={Search} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);