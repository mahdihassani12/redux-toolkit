const store = require("./app/store");
const cakeActions = require("./features/Cake/cakeSlice").cakeActions;
const icecreamActions = require("./features/IceCream/iceCreamSlice").icecreamActions;

console.log("Initial State ", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Update state, ", store.getState())
);

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));


store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.restocked(3));

unsubscribe();
