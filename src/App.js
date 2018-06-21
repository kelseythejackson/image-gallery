import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import apiKey from './config';
import Container from './Components/Container';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunsets&per_page=25&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => {
      this.setState({ images: responseData.photos })
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error)
    });
    // this.getData();
  }

  // getData = () => {
  //   axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=67a5e3716cf1d970d8bbc31c0ed438a3&tags=sunsets&per_page=25&format=json&nojsoncallback=1`)
  //     .then(response => {
  //       console.log(response.data.photos);
  //       this.setState({
  //         images: response.data.photos
  //       });
  //     })
  //     .catch(error => {
  //   console.log('Error fetching and parsing data', error);
  //     });
  // }
  render() {
    return (
      <BrowserRouter>
          <Container />
      </BrowserRouter>

    );
  }
}

export default App;
