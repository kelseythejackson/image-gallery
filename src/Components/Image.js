import React from 'react';

const Image = (props) =>
<li key={props.imageId}>
  <img src={props.url} alt="" />
</li>


export default Image
