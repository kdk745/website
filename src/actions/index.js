import axios from 'axios';

export const RESTS_LOADING = 'RESTS_LOADING';

export function restaurantsLoading() {
  return (dispatch) => {
    // request triggers Loading
    axios.get('/restaurant')
      .then((result) => {
        dispatch(restaurantsLoadSuccess(result.data));
      }).catch(() => {
        dispatch(restaurantsLoadError('could not load restaurants'));
      });

    dispatch({
      type: RESTS_LOADING,
    });
  };
}

const BOOK_TABLE = 'BOOK_TABLE';

export function bookTbl(item) {
  // you need to pass table size data from props back up
  // create an object for it
  // make sure to include name as well to add a booking item
  const id = item.item._id;
  const bookedInfo = item.item.booked;
  const creds = item.item.credentials;
  const infoObj = item.item.info;
  bookedInfo.push(item.bookInfo);
  const parms = {
    credentials: creds,
    info: infoObj,
    booked: bookedInfo
  };
  return (dispatch) => {
    // request triggers Loading
    axios.put(`/restaurant/${id}`, parms)
      .then(() => {
        dispatch(restaurantsLoading());
      }).catch(() => {
        dispatch(bookTblFail('failed to put'));
      });


    dispatch({
      type: BOOK_TABLE,
      resp: 'book table success'
    });
  };
}

export const BOOK_TABLE_FAIL = 'BOOK_TABLE_FAIL';
export function bookTblFail(text) {
  return ({
    type: BOOK_TABLE_FAIL,
    resp: text
  });
}

export const TRIGGER_MAP = 'TRIGGER_MAP';

export function triggerMap(searchText) {

  return (dispatch) => {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchText}&key=AIzaSyB3xtO0L1CN2laHV-NcVNpj6tGQ8yCjXIM`)
      .then((result) => {
        dispatch(triggerMapSuccess(result.data.results[0].geometry.location))
      }).catch((err) => {
        dispatch(triggerMapFail(err));
    });
  };
}

export const REST_ADD_GUEST = 'REST_ADD_GUEST';

export function restAddGuest(Obj) {
  return (dispatch) => {
    fetch(`/addGuest/${Obj._id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(Obj)
    }).then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data);
      // const { token } = data;
      // dispatch(restRegisterSuccess(token));
    });
  }
}

export const TRIGGER_MAP_SUCCESS = 'TRIGGER_MAP_SUCCESS';
export function triggerMapSuccess(coords) {
  return {
    type: TRIGGER_MAP_SUCCESS,
    coords: {
      lat: coords.lat,
      lng: coords.lng
    }
  };
}

export const TRIGGER_MAP_FAIL = 'TRIGGER_MAP_FAIL';
export function triggerMapFail(err) {
  return {
    type: TRIGGER_MAP_FAIL,
    err
  };
}

export const MAP_LOAD = 'MAP_LOAD';

export function mapLoad(coords) {
  return {
    type: MAP_LOAD,
    coords
  };
}

export const RESTS_LOAD_SUCCESS = 'RESTS_LOAD_SUCCESS';

export function restaurantsLoadSuccess(items) {
  return {
    type: RESTS_LOAD_SUCCESS,
    items
  };
}

export const RESTS_LOAD_ERROR = 'RESTS_LOAD_ERROR';

export function restaurantsLoadError(err) {
  return {
    type: RESTS_LOAD_ERROR,
    err
  };
}

// search text change action
export const CHANGE_SEARCH_TEXT = 'CHANGE_SEARCH_TEXT';

export function changeSearchText(text) {
  return {
    type: CHANGE_SEARCH_TEXT,
    text
  };
}

export const CHANGE_NAME_TEXT = 'CHANGE_NAME_TEXT';
export function changeNameText(text) {
  return {
    type: CHANGE_NAME_TEXT,
    text
  };
}

export const CHANGE_SELECT_VAL = 'CHANGE_SELECT_VAL';

export function changeSelectVal(val) {
  return {
    type: CHANGE_SELECT_VAL,
    val
  };
}

export const TOGGLE_SPLASH = 'TOGGLE_SPLASH';

export function toggleSplash(boolean) {
  return {
    type: TOGGLE_SPLASH,
    bool: boolean
  };
}

export const CHANGE_GUEST_NAME = 'CHANGE_GUEST_NAME';

export function changeGuestName(value) {
  return {
    type: CHANGE_GUEST_NAME,
    text: value
  };
}

export const CHANGE_GUEST_SELECT = 'CHANGE_GUEST_SELECT';

export function changeGuestSelect(value) {
  return {
    type: CHANGE_GUEST_SELECT,
    party: value
  };
}

export const DELETE_GUEST = 'DELETE_GUEST';

export function deleteGuest(item) {

  return (dispatch) => {
    // request triggers Loading
    axios.put(`/restaurant/${item._id}`, item.obj)
      .then(() => {
        dispatch(restaurantsLoading());
      }).catch(() => {
        dispatch(bookTblFail('failed to put'));
      });


    dispatch({
      type: DELETE_GUEST,
      resp: 'delete successful'
    });
  };
}

export const ADD_GUEST = 'ADD_GUEST';

export function addGuest(item) {
  return (dispatch) => {
    // request triggers Loading
    axios.put(`/restaurant/${item._id}`, item.obj)
      .then(() => {
        dispatch(restaurantsLoading());
      }).catch(() => {
        dispatch(bookTblFail('failed to put'));
      });


    dispatch({
      type: ADD_GUEST,
      resp: 'add successful'
    });
  };
}

export const UPDATE_WAIT = 'UPDATE_WAIT';

export function updateWait(item) {
  return (dispatch) => {
    // request triggers Loading
    axios.put(`/restaurant/${item._id}`, item.obj)
      .then(() => {
        dispatch(restaurantsLoading());
      }).catch(() => {
        dispatch(bookTblFail('failed to put'));
      });


    dispatch({
      type: UPDATE_WAIT,
      resp: 'wait time update successful'
    });
  };
}

export const CHANGE_WAIT = 'CHANGE_WAIT';

export function changeWait(value) {
  return ({
    type: CHANGE_WAIT,
    text: value
  });
}

export const REST_REGISTER = 'REST_REGISTER';

export function restRegister(object) {
  const reqBody = {
    credentials: object,
    type: REST_REGISTER
  }
  return (dispatch) => {
    // request triggers Loading
    fetch('/restaurant/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(reqBody)
    }).then((res) => {
      return res.json();
    }).then((data) => {
      const { token } = data;
      localStorage.setItem('token', token);
      dispatch(restRegisterSuccess(token));
    });

    dispatch({
      type: REST_REGISTER,
    });
  }

}

export const REST_REGISTER_SUCCESS = 'REST_REGISTER_SUCCESS';

export function restRegisterSuccess(token) {
  return {
    type: REST_REGISTER_SUCCESS,
    value: token
  }
}

export const REST_REGISTER_FAIL = 'REST_REGISTER_FAIL';

export function restRegisterFail() {
  return {
    type: REST_REGISTER_FAIL,
  }
}

export const CHECK_LOGGED_IN = 'CHECK_LOGGED_IN';

export function checkLoggedIn(token) {
  if (token) {
    const reqBody = { token };
    return (dispatch) => {
      fetch("/checklogin", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(reqBody)
      }).then((res) => {
        return res.json();
      }).then((data) => {
          console.log(data);
          const {token, user} = data;
          localStorage.setItem('token', token);
          dispatch(SignInSuccess(token));
      })
    }
  }
}

export function signInFormUpdate(obj) {
  return {
    type: 'SIGNIN_FORM_UPDATE',
    value: obj
  }
}

export function signIn(obj) {

  const reqBody = {
    username: obj.Email,
    password: obj.Password
  }
  return (dispatch) => {
    fetch("/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(reqBody)
    }).then((res) => {
      return (res.status === 401 ? "Sign in Error" : res.json());
    }).then((data) => {
      console.log(data);
      localStorage.setItem("token", data.token);
      dispatch(SignInSuccess(data));
    }).catch(() => {
      dispatch(SignInFail('could not log in as restaurant'));
    });;
  }
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export function SignInSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    value: data
  }
}

export const LOGIN_FAIL = 'LOGIN_FAIL';
export function SignInFail(text) {
  return ({
    type: LOGIN_FAIL,
    resp: text
  });
}

export const LOG_OUT = 'LOG_OUT';
export function logOut() {
  localStorage.removeItem("token");
  return({
    type: LOG_OUT
  })
}

export const GUEST_REG_UPDATE = 'GUEST_REG_UPDATE';

export function guestRegUpdate(obj) {
  return {
    type: GUEST_REG_UPDATE,
    value: obj
  }
}

export const REST_REG_UPDATE = 'REST_REG_UPDATE';

export function restRegUpdate(obj) {
  return {
    type: REST_REG_UPDATE,
    value: obj
  }
}
