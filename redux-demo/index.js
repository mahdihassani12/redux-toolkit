const redux = require("redux");
const createStore = redux.createStore
const bindActionCreatores = redux.bindActionCreators

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

const cakeRestocked = (qty = 1) => {
  return {
    type: CAKE_RESTOCKED,
    payload: qty
  }
}

const cakeOrdered = () => {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
};

const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload
      }
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial State ", store.getState());
const unsubscribe = store.subscribe(() => console.log("Update state ", store.getState()));

const actions = bindActionCreatores({ cakeOrdered, cakeRestocked }, store.dispatch )
actions.cakeOrdered()
actions.cakeOrdered()
actions.cakeOrdered()
actions.cakeRestocked(3)

unsubscribe();
