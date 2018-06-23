import React, { Component} from 'react';
import Form from './Form';
import apiKey from '../config';
import axios from 'axios';
import Image from './Image';
import NotFound from './NotFound';

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
  componentWillMount() {
    if(this.state.keyword) {
      this.getData(this.state.keyword)
    } else {
      this.getData()
    }
  }

  componentDidMount() {

  }


  componentDidUpdate(prevProps, prevState) {

      if(prevProps.keyword!==this.props.keyword){

        this.setState({
          title: this.props.title,
          loading: true,
          images: []
        });
        this.getData(this.props.keyword);
      }




  }



  getData = (keyword) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${keyword}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {

        this.setState({
          images: response.data.photos.photo,
          loading: false,
          title: [keyword]
        });

      })
      .catch(error => {
    console.log('Error fetching and parsing data', error);
      });


  }

  render() {
    const results = this.state.images
    let images;
    if(results.length > 0) {
      images = results
        .map(
          image =>
          <Image
            key={image.id}
            url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
          />
      );
    } else {
      images = <NotFound title={this.state.title}/>
    }






    if(this.props.search) {
      return (
        <div className="photo-container">
          <Form onSearch={this.getData} />
          <h2>{this.state.title}</h2>
          { (this.state.loading) ? <p>Loading..</p> : <ul>{images}</ul> }
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
