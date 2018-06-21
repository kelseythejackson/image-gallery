import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Gallery from './Gallery';
import Search from './Search';


const Container = () => {
 return(
   <div className="container">
     <Header />
     <Route exact path="/" render={ () => <Gallery  title='Home' /> } />
     <Route path="/cats" render={ () => <Gallery title='Cats' /> } />
     <Route path="/dogs" render={ () => <Gallery title='Dogs' /> } />
     <Route path="/computers" render={ () => <Gallery title='Computers' /> } />
     <Route path="/search" render={ () => <Search title='Results'/> } />

   </div>

 );
};

export default Container;
