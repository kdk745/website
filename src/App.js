import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Navigation from './components/Navigation';
import {Locations, Location} from 'react-router-component';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import SignIn from './containers/SignInContainer';
import Registration from './components/Registration';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.props.LoggedIn(token);
    }
  }

  handleSearchBarChange(text) {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=fde54a01d27516539d182393c4aab6d5&language=en-US&query=${text}&page=1&include_adult=false`)
      .then(
        resp => this.update(resp.data.results, text)
      );
  }

  // RestComponent() {
  //   return (this.props.restLoggedIn === "" ? RestaurantLogin : RestAdmin);
  // }

  MyApp() {
    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: "#689f38",
        accent1Color: "#4caf50",
      }
    });
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Locations>
          <Location path="/" handler={Navigation} />
          <Location path="/restaurants" handler={SignIn} />
          <Location path="/register" handler={Registration} />
          {/* <Location path="/guests/" handler={this.GuestComponent()} />
          <Location path="/restaurants/" handler={this.RestComponent()} />
          <Location path="/registration/" handler={Registration} /> */}
        </Locations>
      </MuiThemeProvider>
    )
  }


  render() {


    return(
        <div>
          {this.MyApp()}
        </div>
      )
  }
}
export default App;
