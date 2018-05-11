import { connect } from 'react-redux';
import SignIn from '../../components/SignIn';
import {
  signIn,
  signInFormUpdate
} from '../../actions/index';


const mapStateToProps = (state) => {
  return {
    FormInfo: state.SignInForm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    SignIn: (obj) => {
      dispatch(signIn(obj));
    },
    FormUpdate: (obj) => {
      dispatch(signInFormUpdate(obj));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
