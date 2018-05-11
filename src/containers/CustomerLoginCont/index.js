import { connect } from 'react-redux';
import CustomerLogin from '../../components/CustomerLogin';
import {
  guestLogin,
  guestLoginUpdate
} from '../../actions/index';


const mapStateToProps = (state) => {
  return {
    guestInfo: state.guestLoginInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    GuestLogin: (obj) => {
      dispatch(guestLogin(obj));
    },
    GuestUpdate: (obj) => {
      dispatch(guestLoginUpdate(obj));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerLogin);
