import { connect } from 'react-redux';
import GuestAdmin from '../../components/GuestAdmin';
import {
  logOut,
  changeSearchText,
  triggerMap
} from '../../actions/index';


const mapStateToProps = (state) => {
  return {
    guestInfo: state.guestRegInfo,
    restInfo: state.restRegInfo,
    searchText: state.searchText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    LogOut: (obj) => {
      dispatch(logOut(obj));
    },
    ChangeSearchText: (text) => {
      dispatch(changeSearchText(text));
    },
    TriggerMap: (searchText) => {
      dispatch(triggerMap(searchText));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GuestAdmin);
