const redux = require("redux");
const createStore = redux.createStore

const CAKE_ORDERED = "CAKE_ORDERED";

const cakeOrdered = () => {
  return {
    type: CAKE_ORDERED,
    quanitity: 1,
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

    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial State ", store.getState());
const unsubscribe = store.subscribe(() => console.log("Update state ", store.getState()));
store.dispatch(cakeOrdered());
unsubscribe();
