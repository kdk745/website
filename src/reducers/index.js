import {combineReducers} from 'redux';

function guestLoggedIn(state = '', action) {
  switch(action.type) {
    case 'GUEST_LOGIN_SUCCESS':
    case 'GUEST_REGISTER_SUCCESS':
      return action.value;
    case 'LOG_OUT':
      return '';
  }
  return state;
}

function LoggedIn(state = '', action) {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
    case 'REST_REGISTER_SUCCESS':
      return action.value;
    case 'LOG_OUT':
      return '';
  }
  return state;
}


function guestRegister(state = false, action) {
  if (action.type === 'GUEST_REGISTER_SUCCESS') {
    return true;
  }
  return state;
}

function guestLoginInfo(state = {CEmail:'', CPwd:''}, action) {
  if (action.type === 'GUEST_LOGIN_UPDATE') {
    return action.value;
  }
  return state;
}

function SignInForm(state = {Email:'', Password:''}, action) {
  if (action.type === 'SIGNIN_FORM_UPDATE') {
    return action.value;
  }
  return state;
}

function guestRegInfo(state = {fname:'', lname:'', email:'', pwd:''}, action) {
  if (action.type === 'GUEST_REG_UPDATE') {
    return action.value;
  }
  return state;
}

function restRegInfo(state = {rname:'', rfname:'', rlname:'', remail:'', rpwd:''}, action) {
  if (action.type === 'REST_REG_UPDATE') {
    return action.value;
  }
  return state;
}

function restRegister(state = false, action) {
  if (action.type === 'REST_REGISTER_SUCCESS') {
    return true;
  }
  return state;
}

function isLoading(state = false, action) {
  switch (action.type) {
    case 'RESTS_LOADING':
      return true;
    case 'RESTS_LOAD_SUCCESS':
      return false;
    case 'RESTS_LOAD_ERROR':
      return false;
  }
  return state;
}

function error(state = null, action) {
  if (action.type === 'RESTS_LOAD_ERROR') {
    return action.message;
  }
  return state;
}

function items(state = [], action) {
  switch (action.type) {
    case 'RESTS_LOADING':
      return [];
    case 'RESTS_LOAD_ERROR':
      return [];
    case 'RESTS_LOAD_SUCCESS':
      return action.items;
  }
  return state;
}

const restaurants = combineReducers( {
  isLoading,
  error,
  items
});

function searchText(state = '', action) {
  if (action.type === 'CHANGE_SEARCH_TEXT') {
    return action.text;
  }
  return state;
}

function nameText(state = '', action) {
  if (action.type === 'CHANGE_NAME_TEXT') {
    return action.text;
  }
  return state;
}

function bookTbl(state = '', action) {
  if (action.type === 'BOOK_TABLE') {
    return action.resp;
  } else if (action.type === 'BOOK_TABLE_FAIL') {
    return action.resp;
  }
  return state;
}

function map(state = {lat: 0, lng: 0}, action) {
  switch (action.type) {
    case 'TRIGGER_MAP':
      return 'map loading';
    case 'TRIGGER_MAP_SUCCESS':
      return action.coords;
    case 'TRIGGER_MAP_FAIL':
      return action.err;
    default:
      return state;
  }
}

function selectVal(state = 1, action) {
  if (action.type === 'CHANGE_SELECT_VAL') {
    return action.val;
  }
  return state;
}

function changeGuestName(state = '', action) {
  if (action.type === 'CHANGE_GUEST_NAME') {
    return action.text;
  }
  return state;
}

function changeGuestSelect(state = 1, action) {
  if (action.type === 'CHANGE_GUEST_SELECT') {
    return action.party;
  }
  return state;
}

function addGuest(state = '', action) {
  if (action.type === 'ADD_GUEST') {
    return action;
  }
  return state;
}

function updateWait(state = '', action) {
  if (action.type === 'UPDATE_WAIT') {
    return action;
  }
  return state;
}

function deleteGuest(state = '', action) {
  if (action.type === 'DELETE_GUEST') {
    return action.type;
  }
  return state;
}

function changeWait(state = '', action) {
  if (action.type === 'CHANGE_WAIT') {
    return action.text;
  }
  return state;
}


export default combineReducers( {
  guestRegister,
  restRegister,
  guestRegInfo,
  restRegInfo,
  guestLoginInfo,
  SignInForm,
  LoggedIn,
  searchText,
  restaurants,
  nameText,
  bookTbl,
  map,
  selectVal,
  changeGuestName,
  changeGuestSelect,
  addGuest,
  updateWait,
  deleteGuest,
  changeWait
});
