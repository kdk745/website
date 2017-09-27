import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Navigation from './components/Navigation';
import CustomerLogin from './components/CustomerLogin';
import RestaurantLogin from './components/RestaurantLogin';
import RegistrationCont from './containers/RegistrationCont/';
import {Locations, Location} from 'react-router-component';
class App extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      movies: [],
      addedMovies: []
    };
  }

  updateAdded(data) {
    this.setState({
      addedMovies: data
    });
  }

  update(data) {
    this.setState({
      movies: data,
    });
  }

  componentDidMount() {
    // axios.get('/addedMovies')
    //   .then(resp => {
    //     this.setState({
    //       searchText: this.state.searchText,
    //       addedMovies: resp.data
    //     });
    //   })
    //   .catch(err => console.log(`Error! ${err}`));
  }

  handleSearchBarChange(text) {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=fde54a01d27516539d182393c4aab6d5&language=en-US&query=${text}&page=1&include_adult=false`)
      .then(
        resp => this.update(resp.data.results, text)
      );
  }

  render() {
    return (
      <div>
        <Locations>
          <Location path="/" handler={Navigation} />
          <Location path="/guests/" handler={CustomerLogin} />
          <Location path="/restaurants/" handler={RestaurantLogin} />
          <Location path="/registration/" handler={RegistrationCont} />
        </Locations>
      </div>
    );
  }
}
export default App;
