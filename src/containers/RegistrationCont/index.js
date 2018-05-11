import { connect } from 'react-redux';
import Registration from '../../components/Registration';
import {
  guestRegister,
  restRegister,
  guestRegUpdate,
  restRegUpdate,
} from '../../actions/index';


const mapStateToProps = (state) => {
  return {
    guestInfo: state.guestRegInfo,
    restInfo: state.restRegInfo,
    restRegisterSuccess: state.restRegister,
    guestRegisterSuccess: state.guestRegister,
    restLoggedIn: state.restLoggedIn,
    guestLoggedIn: state.guestLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    GuestRegister: (obj) => {
      dispatch(guestRegister(obj));
    },
    RestRegister: (obj) => {
      dispatch(restRegister(obj));
    },
    GuestUpdate: (obj) => {
      dispatch(guestRegUpdate(obj));
    },
    RestUpdate: (obj) => {
      dispatch(restRegUpdate(obj));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration);
