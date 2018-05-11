import { connect } from 'react-redux';
import MapView from '../../components/MapView/';

const mapStateToProps = (state) => {
  return {
    lat: state.map.lat,
    lng: state.map.lng
  };
};
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onChange: value => {
//       dispatch(mapLoad(value));
//     },
//     book: value => {
//       dispatch(bookTbl(value));
//     }
//   };
// };

export default connect(
  mapStateToProps
)(MapView);
