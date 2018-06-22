import React from 'react';
import Form from './Form';
import PhotoContainer from './PhotoContainer'

const Search = (props) =>
  <div>
    <Form />
    <PhotoContainer title={props.title}/>
  </div>

export default Search
