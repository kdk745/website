import { connect } from 'react-redux';
import RestAdmin from '../../components/RestAdmin';
import {
  logOut,
} from '../../actions/index';


const mapStateToProps = (state) => {
  return {
    guestInfo: state.guestRegInfo,
    restInfo: state.restRegInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    LogOut: (obj) => {
      dispatch(logOut(obj));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestAdmin);
