import React from 'react';
import Form from './Form';
import Gallery from './Gallery'

const Search = (props) =>
  <div>
    <Form />
    <Gallery title={props.title}/>
  </div>

export default Search
