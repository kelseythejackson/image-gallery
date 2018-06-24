import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './Navigation';
import ImagesContainer from './ImagesContainer';
import PageNotFound from './PageNotFound';

const Container = () =>
  <div className="container">
    <Navigation />
    <Switch>
      <Route exact path="/" render={ () => <Redirect  to="/cats" /> } />
      <Route path="/cats" render={ () => <ImagesContainer  title="Cats" keyword="cats" /> } />
      <Route path="/dogs" render={ () => <ImagesContainer  title="Dogs" keyword="dogs" /> } />
      <Route path="/computers" render={ () => <ImagesContainer  title="Computer" keyword="computers"/> } />
      <Route path="/sneakers" render={ () => <ImagesContainer  title="Sneakers" keyword="sneakers" /> } />
      <Route path="/search" render={ () => <ImagesContainer keyword="Search" search /> } />
      <Route component={PageNotFound} />
    </Switch>
  </div>

export default Container;
