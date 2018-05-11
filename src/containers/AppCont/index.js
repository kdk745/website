import { connect } from 'react-redux';
import App from '../../App';
import {checkLoggedIn} from '../../actions';
const mapStateToProps = (state) => {
  return {
    guestLoggedIn: state.guestLoggedIn,
    restLoggedIn: state.restLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    LoggedIn: (token) => {
      dispatch(checkLoggedIn(token));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
