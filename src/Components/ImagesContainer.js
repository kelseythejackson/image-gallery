import React, { Component} from 'react';
import Form from './Form';
import apiKey from '../config';
import axios from 'axios';
import Image from './Image';

class ImagesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      title: props.title,
      keyword: props.keyword,
      images: []
    }
  }

  componentDidMount() {
    if(this.state.keyword) {
      this.getData(this.state.keyword)
    } else {
      this.getData()
    }

  }

  getData = (keyword = 'sunsets') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${keyword}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          images: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
    console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    let images;
    images = this.state.images
      .map(
        image =>
        <Image
          key={image.id}
          url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
        />
    );

    if(this.props.search) {
      return (
        <div className="photo-container">
            <Form />
            <h2>{this.state.title}</h2>
            {
              (this.state.loading)
              ? <p>Loading..</p>
              : <ul>
                  {images}
                </ul>
            }
        </div>
      );
    } else {
      return (
        <div className="photo-container">
          <h2>{this.state.title}</h2>
          { (this.state.loading) ? <p>Loading..</p> : <ul>{images}</ul> }
        </div>
      );
    }
  }
}
export default ImagesContainer;
