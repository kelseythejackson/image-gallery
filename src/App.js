import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Components/Header';
import ImagesContainer from './Components/ImagesContainer';
import PageNotFound from './Components/PageNotFound';
// import NotFound from './Components/NotFound';





class App extends Component {
  // constructor() {
  //   super();
  //
  // }

  componentDidMount() {

    // this.getData("cat");
    // this.getData("dog");
    // this.getData("computer");
  }

  // getData = (keyword = 'sunsets') => {
  //   axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${keyword}&per_page=25&format=json&nojsoncallback=1`)
  //     .then(response => {
  //
  //       this.setState({
  //         [`${keyword}Images`]: response.data.photos.photo
  //       });
  //     })
  //     .catch(error => {
  //   console.log('Error fetching and parsing data', error);
  //     });
  // }
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
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
      </BrowserRouter>

    );
  }
}

export default App;
