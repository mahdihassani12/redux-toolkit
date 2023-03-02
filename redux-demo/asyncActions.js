const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunk = require("redux-thunk").default;
const axios = require("axios");

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USERS_REQUESTS = "FETCH_USERS_REQUESTS";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTS,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

const fetchUsers = () => {
    return function (dispatch) {
      dispatch(fetchUsersRequest);
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          const users = response.data;
          dispatch(fetchUsersSuccess(users));
        })
        .catch((error) => {
          dispatch(fetchUsersFailure(error.message));
        });
    };
  };

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => { console.log( store.getState() ) });
store.dispatch(fetchUsers());