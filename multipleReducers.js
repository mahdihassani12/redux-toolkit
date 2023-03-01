const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreatores = redux.bindActionCreators;
const combineReducers = redux.combineReducers

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

const cakeRestocked = (qty = 1) => {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
};

const cakeOrdered = (qty = 1) => {
  return {
    type: CAKE_ORDERED,
    payload: qty,
  };
};

const icecreamRestocked = (qty = 1) => {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
};

const icecreamOrdered = (qty = 1) => {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
};

const initialCakes = {
  numOfCakes: 10
};

const initialIcecreams = {
    numOfIcecream: 10
  };

const cakeReducer = (state = initialCakes, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const icecreamReducer = (state = initialIcecreams, action) => {
    switch (action.type) {
      case ICECREAM_ORDERED:
        return {
          ...state,
          numOfIcecream: state.numOfIcecream - action.payload,
        };
      case ICECREAM_RESTOCKED:
        return {
          ...state,
          numOfIcecream: state.numOfIcecream + action.payload,
        };
      default:
        return state;
    }
  };

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})
const store = createStore(rootReducer);
console.log("Initial State ", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Update state ", store.getState())
);

const actions = bindActionCreatores(
  { cakeOrdered, cakeRestocked, icecreamOrdered, icecreamRestocked },
  store.dispatch
);
actions.cakeOrdered();
actions.cakeOrdered();
actions.cakeOrdered();
actions.cakeRestocked(3);

actions.icecreamOrdered();
actions.icecreamOrdered();
actions.icecreamOrdered();
actions.icecreamRestocked(3);

unsubscribe();
