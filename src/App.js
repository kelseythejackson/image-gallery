import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Container from './Components/Container';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container />
      </BrowserRouter>
    );
  }
}

export default App;
